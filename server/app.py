from flask import request, make_response, session
from flask_restful import Resource
from flask_cors import CORS
from flask_session import Session

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
            
        response = make_response(favorite.to_dict(), 200)
        return response
        
api.add_resource(FavoritesById, '/favorites/<int:id>')



if __name__ == '__main__':
    app.run(port=5555, debug=True)