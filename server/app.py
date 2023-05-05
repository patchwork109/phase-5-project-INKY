from flask import request, make_response, session, jsonify
from flask_restful import Resource
from sqlalchemy.exc import IntegrityError

from config import app, db, api
from models import User, Cart, Tattoo, CartTattoo, Favorite

class Home(Resource):
    def get(self):
        return make_response({"message":"Phase 5 Project - woohoo!"})

class Tattoos(Resource):
    def get(self):
        tattoos = [tattoo.to_dict(rules=('favorites', 'favorites.tattoo')) for tattoo in Tattoo.query.all()]
        response = make_response(tattoos, 200)
        return response
    
    def post(self):
        data = request.get_json()

        try:
            new_tattoo = Tattoo(
                name = data['name'],
                description = data['description'],
                size = data['size'],
                category = data['category'],
                price = data['price'],
                image = data['image']
            )
            db.session.add(new_tattoo)
            db.session.commit()
        except:
            response_body = {"error" : "Not able to create new tattoo"}
            response = make_response(response_body, 400)
            return response
        
        new_tattoo_dict = new_tattoo.to_dict()
        response = make_response(new_tattoo_dict, 201)
        return response

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

class FavoriteById(Resource):
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
            response_body = {"error" : "Unable to delete favorite"}
            response = make_response(response_body, 400)
            return response

class UserById(Resource):
    def get(self, id):
        user = User.query.filter(User.id == id).first()
        if not user:
            response_body = {"error" : "User not found"}
            response = make_response(response_body, 404)
            return response
        
        response = make_response(user.to_dict(rules=('tattoos', 'favorites', 'favorites.tattoo')), 200)
        return response

class CartTattoos(Resource):
    def get(self):
        cart_tattoos = [cart_tattoo.to_dict() for cart_tattoo in CartTattoo.query.all()]
        response = make_response(cart_tattoos, 200)
        return response
    
    def post(self):
        data = request.get_json()

        try:
            new_cart_tattoo = CartTattoo(
                quantity = data['quantity'],
                cart_id = data['cart_id'],
                tattoo_id = data['tattoo_id']
            )

            db.session.add(new_cart_tattoo)
            db.session.commit()
        except:
            response_body = {"error" : "Not able to create new cart_tattoo"}
            response = make_response(response_body, 400)
            return response
        
        new_cart_tattoo_dict = new_cart_tattoo.to_dict()
        response = make_response(new_cart_tattoo_dict, 201)
        return response
    
class CartTattooById(Resource):
    def get(self, id):
        cart_tattoo = CartTattoo.query.filter(CartTattoo.id == id).first()
        if not cart_tattoo:
            response_body = {"error" : "Cart tattoo not found"}
            response = make_response(response_body, 404)
            return response
        
        response = make_response(cart_tattoo.to_dict(), 200)
        return response
    
    def patch(self, id):
        cart_tattoo = CartTattoo.query.filter(CartTattoo.id == id).first()
        if not cart_tattoo:
            response_body = {"error" : "Cart tattoo not found"}
            response = make_response(response_body, 404)
            return response
        
        data = request.get_json()
        try:
            for key in data.keys():
                setattr(cart_tattoo, key, data[key])
            
            db.session.add(cart_tattoo)
            db.session.commit()
        except:
            response_body = {"error" : "Unable to update cart tattoo"}
            response = make_response(response_body, 400)
            return response

        response = make_response(cart_tattoo.to_dict(rules=('tattoo', )), 200)
        return response

    def delete(self, id):
        cart_tattoo = CartTattoo.query.filter(CartTattoo.id == id).first()
        if not cart_tattoo:
            response_body = {"error" : "Cart tattoo not found"}
            response = make_response(response_body, 404)
            return response
        
        try: 
            db.session.delete(cart_tattoo)
            db.session.commit()
        except: 
            response_body = {"error" : "Unable to delete cart tattoo"}
            response = make_response(response_body, 400)
            return response

class Carts(Resource):
    def get(self):
        carts = [cart.to_dict() for cart in Cart.query.all()]
        response = make_response(carts, 200)
        return response
    
    def post(self):
        data = request.get_json()

        try:
            new_cart = Cart(
                user_id = data['user_id']
            )

            db.session.add(new_cart)
            db.session.commit()
        except:
            response_body = {"error" : "Not able to create new cart"}
            response = make_response(response_body, 400)
            return response
        
        new_cart_dict = new_cart.to_dict()
        response = make_response(new_cart_dict, 201)
        return response
        
class CartById(Resource):
    def get(self, id):
        cart = Cart.query.filter(Cart.id == id).first()
        if not cart:
            response_body = {"error" : "Cart not found"}
            response = make_response(response_body, 404)
            return response
        
        response = make_response(cart.to_dict(rules=('tattoos', 'cart_tattoos', 'cart_tattoos.tattoo')), 200)
        return response
    
    def delete(self, id):
        cart = Cart.query.filter(Cart.id == id).first()
        if not cart:
            response_body = {"error" : "Cart not found"}
            response = make_response(response_body, 404)
            return response
        
        try: 
            db.session.delete(cart)
            db.session.commit()
        except: 
            response_body = {"error" : "Unable to delete cart"}
            response = make_response(response_body, 400)
            return response
    
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
        except IntegrityError as e:
            db.session.rollback()
            error_message = str(e)
            if 'UNIQUE' and 'username' in error_message:
                return make_response({'error': 'Username already taken. Please enter a different username.'}, 422)
            return make_response({'error': error_message}, 422)
        # except ValueError as e:
        #     db.session.rollback()
        #     error_message = str(e)
        #     if 'required' in error_message:
        #         return make_response({'error': 'Username is required'}, 422)
        #     return make_response({'error': error_message}, 422)

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

class Logout(Resource):
    def delete(self):
        if session.get('user_id'):
            session['user_id'] = None
            return {'message': '204 No Content'}, 204
        
        return make_response({"message":"401: Not Authorized!"}, 401)

class CheckSession(Resource):
    def get(self):
        if session.get('user_id'):
            current_user = User.query.filter(User.id == session['user_id']).first()
            return make_response(current_user.to_dict(), 200) 
        
        return make_response({"message":"401: Not Authorized!"}, 401)


api.add_resource(Home, '/' )
api.add_resource(Tattoos, '/tattoos')
api.add_resource(Favorites, '/favorites')
api.add_resource(FavoriteById, '/favorites/<int:id>')
api.add_resource(UserById, '/users/<int:id>')
api.add_resource(CartTattoos, '/cart_tattoos')
api.add_resource(CartTattooById, '/cart_tattoos/<int:id>')
api.add_resource(Carts, '/carts')
api.add_resource(CartById, '/carts/<int:id>')
api.add_resource(Signup, '/signup', endpoint='signup')
api.add_resource(Login, '/login', endpoint='login')
api.add_resource(Logout, '/logout', endpoint='logout')
api.add_resource(CheckSession, '/check_session', endpoint='check_session')


if __name__ == '__main__':
    app.run(port=5555, debug=True)