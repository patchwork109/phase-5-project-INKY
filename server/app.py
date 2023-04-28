from flask import request, make_response, session
from flask_restful import Resource
from sqlalchemy.exc import IntegrityError

from config import app, db, api
from models import User, Order, Cart, Tattoo, CartTattoo, Favorite

class Home(Resource):
    def get(self):
        return make_response({"message":"Phase 5 Project - woohoo!"})
    
api.add_resource(Home, '/' )


class Tattoos(Resource):
    def get(self):
        tattoos = [tattoo.to_dict() for tattoo in Tattoo.query.all()]
        response = make_response(tattoos, 200)
        return response
    
api.add_resource(Tattoos, '/tattoos')


class Favorites(Resource):
    def get(self):
        favorites = [favorite.to_dict() for favorite in Favorite.query.all()]
        response = make_response(favorites, 200)
        return response
    
    def post(self):
        data = request.get_json()

        try:
            new_favorite = Favorite(
                is_favorited = data['is_favorited'],
                user_id = data['user_id'],
                tattoo_id = data['tattoo_id']
            )

            db.session.add(new_favorite)
            db.session.commit()
        except:
            response_body = {"error" : "Not able to create new favorite"}
            response = make_response(response_body, 400)
            return response
        
        new_favorite_dict = new_favorite.to_dict()
        response = make_response(new_favorite_dict, 201)
        return response
        
api.add_resource(Favorites, '/favorites')


class FavoritesById(Resource):
    def get(self, id):
        favorite = Favorite.query.filter(Favorite.id == id).first()
        if not favorite:
            response_body = {"error" : "Favorite not found"}
            response = make_response(response_body, 404)
            return response
        
        response = make_response(favorite.to_dict(), 200)
        return response
    
    def patch(self, id):
        favorite = Favorite.query.filter(Favorite.id == id).first()
        if not favorite:
            response_body = {"error" : "Favorite not found"}
            response = make_response(response_body, 404)
            return response
        
        data = request.get_json()
        try:
            for key in data.keys():
                setattr(favorite, key, data[key])
            
            db.session.add(favorite)
            db.session.commit()
        except:
            response_body = {"error" : "Unable to update favorite"}
            response = make_response(response_body, 400)
            return response

        response = make_response(favorite.to_dict(), 200)
        return response
    
    def delete(self, id):
        favorite = Favorite.query.filter(Favorite.id == id).first()
        if not favorite:
            response_body = {"error" : "Favorite not found"}
            response = make_response(response_body, 404)
            return response
        
        try: 
            db.session.delete(favorite)
            db.session.commit()
        except: 
            response_body = {"error" : "Unable to update favorite"}
            response = make_response(response_body, 400)
            return response
        
api.add_resource(FavoritesById, '/favorites/<int:id>')


class Signup(Resource):
    def post(self):
        data = request.get_json()
        name = data.get('name')
        username = data.get('username')
        password = data.get('password')

        user = User(
            name = name,
            username = username, 
        )

        user.password_hash = password

        try:
            db.session.add(user)
            db.session.commit()

            session['user_id'] = user.id
            response = make_response(user.to_dict(), 201)
            return response
        except IntegrityError:
            response_body = {"error" : "422 Unprocessable Entity"}
            response = make_response(response_body, 422)
            return response
        
api.add_resource(Signup, '/signup', endpoint='signup')


class Login(Resource):
    def post(self):

        data = request.get_json()
        username = data.get('username')
        password = data.get('password')

        user = User.query.filter(User.username == username).first()

        if user:
            if user.authenticate(password):
                session['user_id'] = user.id
                return make_response(user.to_dict(), 200)
        
        response = make_response({"message":"401: Not Authorized!"}, 401)
        return response

api.add_resource(Login, '/login', endpoint='login')


class Logout(Resource):
    def delete(self):
        if session.get('user_id'):
            session['user_id'] = None
            return {'message': '204 No Content'}, 204
        
        return make_response({"message":"401: Not Authorized!"}, 401)

api.add_resource(Logout, '/logout', endpoint='logout')


class CheckSession(Resource):
    def get(self):
        if session.get('user_id'):
            current_user = User.query.filter(User.id == session['user_id']).first()
            return make_response(current_user.to_dict(), 200) 
        
        return make_response({"message":"401: Not Authorized!"}, 401)

api.add_resource(CheckSession, '/check_session', endpoint='check_session')


if __name__ == '__main__':
    app.run(port=5555, debug=True)