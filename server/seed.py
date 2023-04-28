from random import randint, choice as rc

from app import app
from config import db
from models import User, Order, Cart, Tattoo, CartTattoo, Favorite

if __name__ == '__main__':
    with app.app_context():

        print("Deleting existing seed data...")

        User.query.delete()
        Tattoo.query.delete()
        Favorite.query.delete()

        print("Starting to re-seed...")

        # sam = User(name="Sam", username="samieg", password="1234")
        # tom = User(name="Tom", username="shullt", password="5678")

        # db.session.add_all([sam, tom])
        # db.session.commit()

        cloud = Tattoo(name="Cloud", description="A very fluffy cloud", size="Small", category="Nature", price=3.0, image="https://inkboxdesigns.imgix.net/new_designs/cyan/cut_21461_20200730041744_cyan.jpg?auto=compress,format&con=100&gam=100&pad=20&bg=F4F5F7&fit=fill&duotone=000000,F4F5F7&w=355&fit=max&auto=compress,format&q=50&dpr=2")
        dino = Tattoo(name="Dino", description="A small dino friend", size="Small", category="Dinosaurs", price=4.0, image="https://inkboxdesigns.imgix.net/product_stencils/4805914361934_printable_1623704515.jpg?auto=compress,format&con=100&gam=100&pad=20&bg=F4F5F7&fit=fill&duotone=000000,F4F5F7&w=355&fit=max&auto=compress,format&q=50&dpr=2")

        db.session.add_all([cloud, dino])
        db.session.commit()

        # favorite1 = Favorite(is_favorited=True, user=sam, tattoo=cloud)
        # favorite2 = Favorite(is_favorited=True, user=tom, tattoo=dino)

        # db.session.add_all([favorite2])
        # db.session.commit()

        print("Seed done!")

