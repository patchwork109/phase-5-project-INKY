from flask import request, make_response, session
from flask_restful import Resource
from config import app, db, api
from models import Order, PotatoDish, DishOrder, User
from flask_cors import CORS
from flask_session import Session



if __name__ == '__main__':
    app.run(port=5555, debug=True)