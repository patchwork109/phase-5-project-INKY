from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.orm import validates
from sqlalchemy.ext.associationproxy import association_proxy
from sqlalchemy.ext.hybrid import hybrid_property
from sqlalchemy.exc import IntegrityError
from flask import session

from config import db, bcrypt

class User(db.Model, SerializerMixin):
    __tablename__ = 'users'

    serialize_rules = ('-favorites', )

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False)
    username = db.Column(db.String, nullable=False, unique=True)
    _password_hash = db.Column(db.String, nullable=False, unique=True)
    created_at = db.Column(db.DateTime, server_default=db.func.now())
    updated_at = db.Column(db.DateTime, onupdate=db.func.now())

    favorites = db.relationship('Favorite', backref='user')
    tattoos = association_proxy('favorites', 'tattoo')

    def __repr__(self):
        return f'User {self.username}, ID {self.id}'
    
    @hybrid_property
    def password_hash(self):
        return self._password_hash
    
    @password_hash.setter
    def password_hash(self, password):
        password_hash = bcrypt.generate_password_hash(password.encode('utf-8'))
        self._password_hash = password_hash.decode('utf-8')

    def authenticate(self, password):
        return bcrypt.check_password_hash(
            self._password_hash, password.encode('utf-8'))
    
    @validates('name')
    def validate_name(self, key, value):
        if not value:
            raise ValueError('Name is required')
        return value
    
    @validates('username')
    def validate_username(self, key, value):
        users = User.query.all()
        usernames = [user.username for user in users]
        if not value:
            raise ValueError('Username is required')
        if value in usernames:
            raise ValueError('Username must be unique')
        if len(value) < 4:
            raise ValueError('Username must be at least 4 characters')
        if len(value) > 15:
            raise ValueError('Username must be no more than 15 characters')
        return value
    
    @validates('_password_hash')
    def validate_password(self, key, value):
        users = User.query.all()
        passwords = [user._password_hash for user in users]
        if not value:
            raise ValueError('Password is required')
        if value in passwords:
            raise ValueError('Password must be unique')
        if len(value) < 5:
            raise ValueError('Password must be at least 5 characters')
        return value


class Cart(db.Model, SerializerMixin):
    __tablename__ = 'carts'

    serialize_rules = ('-cart_tattoos',)

    id = db.Column(db.Integer, primary_key=True)
    created_at = db.Column(db.DateTime, server_default=db.func.now())
    updated_at = db.Column(db.DateTime, onupdate=db.func.now())

    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))

    cart_tattoos = db.relationship('CartTattoo', backref='cart')
    tattoos = association_proxy('cart_tattoos', 'tattoo')

    def get_total(self):
        total = 0
        for cart_tattoo in self.cart_tattoos:
            tattoo_price = cart_tattoo.tattoo.price
            total += cart_tattoo.quantity * tattoo_price
        return total


class Tattoo(db.Model, SerializerMixin):
    __tablename__ = 'tattoos'

    serialize_rules = ('-favorites', '-cart_tattoos', )
    # 'is_favorited', 'is_in_cart'

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

    cart_tattoos = db.relationship('CartTattoo', backref='tattoo')
    carts = association_proxy('cart_tattoos', 'cart')

    # @property
    # def is_favorited(self):
    #     if session.get('user_id'):
    #         favorite_instance = Favorite.query.filter(Favorite.user_id == session['user_id']).first()
    #         return favorite_instance
    #     return False
    
    # @property
    # def is_in_cart(self):
    #     if session.get('user_id'):
    #         cart_instance = Cart.query.filter(Cart.user_id == session['user_id']).first()
    #         return cart_instance
    #     return False
    

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

    serialize_rules = ('user', 'tattoo')

    id = db.Column(db.Integer, primary_key=True)
    is_favorited = db.Column(db.Boolean)
    created_at = db.Column(db.DateTime, server_default=db.func.now())
    updated_at = db.Column(db.DateTime, onupdate=db.func.now())

    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    tattoo_id = db.Column(db.Integer, db.ForeignKey('tattoos.id'))