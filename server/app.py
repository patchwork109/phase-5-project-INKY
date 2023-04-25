from flask import request, make_response, session
from flask_restful import Resource
from flask_cors import CORS
from flask_session import Session

from config import app, db, api
from models import User, Order, Cart, Tattoo, CartTattoo, Favorite



if __name__ == '__main__':
    app.run(port=5555, debug=True)