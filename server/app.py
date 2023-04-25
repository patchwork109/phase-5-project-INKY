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



if __name__ == '__main__':
    app.run(port=5555, debug=True)