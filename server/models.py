from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.orm import validates
from sqlalchemy.ext.associationproxy import association_proxy

from config import db

class User(db.Model, SerializerMixin):
    __tablename__ = 'users'

    serialize_rules = ( )

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)
    email = db.Column(db.String)
    username = db.Column(db.String)
    password = db.Column(db.String)
    created_at = db.Column(db.DateTime, server_default=db.func.now())
    updated_at = db.Column(db.DateTime, onupdate=db.func.now())

    favorites = db.relationship('Favorite', backref='user')
    tattoos = association_proxy('favorites', 'tattoo')


class Order(db.Model, SerializerMixin):
    __tablename__ = 'orders'

    serialize_rules = ( )

    id = db.Column(db.Integer, primary_key=True)
    created_at = db.Column(db.DateTime, server_default=db.func.now())
    updated_at = db.Column(db.DateTime, onupdate=db.func.now())

    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))


class Cart(db.Model, SerializerMixin):
    __tablename__ = 'carts'

    serialize_rules = ( )

    id = db.Column(db.Integer, primary_key=True)
    created_at = db.Column(db.DateTime, server_default=db.func.now())
    updated_at = db.Column(db.DateTime, onupdate=db.func.now())

    order_id = db.Column(db.Integer, db.ForeignKey('orders.id'))


class Tattoo(db.Model, SerializerMixin):
    __tablename__ = 'tattoos'

    serialize_rules = ( )

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)
    description = db.Column(db.String)
    size = db.Column(db.String)
    category = db.Column(db.String)
    price = db.Column(db.Float)
    image = db.Column(db.String)
    created_at = db.Column(db.DateTime, server_default=db.func.now())
    updated_at = db.Column(db.DateTime, onupdate=db.func.now())

    favorites = db.relationship('Favorite', backref='tattoo')
    users = association_proxy('favorites', 'user')


class CartTattoo(db.Model, SerializerMixin):
    __tablename__ = 'cart_tattoos'

    serialize_rules = ( )

    id = db.Column(db.Integer, primary_key=True)
    quantity = db.Column(db.Integer)
    created_at = db.Column(db.DateTime, server_default=db.func.now())
    updated_at = db.Column(db.DateTime, onupdate=db.func.now())

    cart_id = db.Column(db.Integer, db.ForeignKey('carts.id'))
    tattoo_id = db.Column(db.Integer, db.ForeignKey('tattoos.id'))


class Favorite(db.Model, SerializerMixin):
    __tablename__ = 'favorites'

    serialize_rules = ( )

    id = db.Column(db.Integer, primary_key=True)
    is_favorited = db.Column(db.Boolean)
    created_at = db.Column(db.DateTime, server_default=db.func.now())
    updated_at = db.Column(db.DateTime, onupdate=db.func.now())

    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    tattoo_id = db.Column(db.Integer, db.ForeignKey('tattoos.id'))