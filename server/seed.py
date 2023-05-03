from random import randint, choice as rc

from app import app
from config import db
from models import User, Cart, Tattoo, CartTattoo, Favorite

if __name__ == '__main__':
    with app.app_context():

        print("Deleting existing seed data...")

        User.query.delete()
        Tattoo.query.delete()
        Favorite.query.delete()
        Cart.query.delete()
        CartTattoo.query.delete()

        print("Starting to re-seed...")

        # sam = User(name="Sam", username="samieg", password_hash="1234")
        # tom = User(name="Tom", username="shullt", password_hash="5678")

        # db.session.add_all([sam, tom])
        # db.session.commit()

        # Nature
        nature1 = Tattoo(name="Cloud", 
                       description="A very fluffy cloud that's all smiles? I think yes. Let this tattoo be your silver lining.", 
                       size="Small", category="Nature", price=randint(3, 9), 
                       image="https://inkboxdesigns.imgix.net/new_designs/cyan/cut_21461_20200730041744_cyan.jpg?auto=compress,format&con=100&gam=100&pad=20&bg=F4F5F7&fit=fill&duotone=000000,F4F5F7&w=355&fit=max&auto=compress,format&q=50&dpr=2")

        nature2 = Tattoo(name="Lightning", 
                      description="Need a burst of energy? This tattoo will light up the room.", 
                      size="Small", category="Nature", price=randint(3, 9), 
                      image="https://inkboxdesigns.imgix.net/product_stencils/6567314948174_printable_1623702701.jpg?auto=compress,format&con=100&gam=100&pad=20&bg=F4F5F7&fit=fill&duotone=000000,F4F5F7&w=625&fit=max&auto=compress,format&q=50&dpr=2")
        
        nature3 = Tattoo(name="Rainy Day", 
                      description="If you relish in running through the rain, you'll definitely love this delicate little rain cloud.", 
                      size="Small", category="Nature", price=randint(3, 9), 
                      image="https://inkboxdesigns.imgix.net/product/lifestyle/Gg8yL2Wk1GHFW4GhVnRGF2D2XLGWfGU4FKVSpEaR.jpg?auto=compress,format&con=100&gam=100&pad=20&bg=F4F5F7&fit=fill&duotone=000000,F4F5F7&w=625&fit=max&auto=compress,format&q=50&dpr=2")
        
        nature4 = Tattoo(name="Wavy", 
                      description="Go with the flow by sporting this wavy design.", 
                      size="Large", category="Nature", price=randint(9, 18), 
                      image="https://inkboxdesigns.imgix.net/product_stencils/4286903287886_1574964939.jpg?auto=compress,format&con=100&gam=100&pad=20&bg=F4F5F7&fit=fill&duotone=000000,F4F5F7&w=625&fit=max&auto=compress,format&q=50&dpr=2")
        
        nature5 = Tattoo(name="Mountain", 
                      description="Reach new heights with this epic mountain tattoo.", 
                      size="Medium", category="Nature", price=randint(5, 12), 
                      image="https://inkboxdesigns.imgix.net/new_designs/cyan/cut_16315_20200402055054_cyan.jpg?auto=compress,format&con=100&gam=100&pad=20&bg=F4F5F7&fit=fill&duotone=000000,F4F5F7&w=625&fit=max&auto=compress,format&q=50&dpr=2")
        
        nature6 = Tattoo(name="Sunny", 
                      description="Radiate warmth and channel those sunny summer vibes all the time while rocking this sweet lil sunshine design.", 
                      size="Medium", category="Nature", price=randint(5, 12), 
                      image="https://inkboxdesigns.imgix.net/new_designs/cyan/cut_16937_20200414061648_cyan.jpg?auto=compress,format&con=100&gam=100&pad=20&bg=F4F5F7&fit=fill&duotone=000000,F4F5F7&w=625&fit=max&auto=compress,format&q=50&dpr=2")
        
        nature = [nature1, nature2, nature3, nature4, nature5, nature6]

        #Dinosaurs
        dino1 = Tattoo(name="T-Rex", 
                      description="Rawr! A little tattoo with big personality. Show off your love for T-Rexes with this ink.", 
                      size="Small", category="Dinosaurs", price=randint(3, 9), 
                      image="https://inkboxdesigns.imgix.net/product_stencils/4805914361934_printable_1623704515.jpg?auto=compress,format&con=100&gam=100&pad=20&bg=F4F5F7&fit=fill&duotone=000000,F4F5F7&w=355&fit=max&auto=compress,format&q=50&dpr=2")

        dino2 = Tattoo(name="Stego", 
                      description="It's been extinct since the Cretaceous Period, but this precious plant-eater remains one of the most recognizable dinos.", 
                      size="Small", category="Dinosaurs", price=randint(3, 9), 
                      image="https://inkboxdesigns.imgix.net/product_stencils/4805914460238_printable_1623704779.jpg?auto=compress,format&con=100&gam=100&pad=20&bg=F4F5F7&fit=fill&duotone=000000,F4F5F7&w=625&fit=max&auto=compress,format&q=50&dpr=2")
        
        dino3 = Tattoo(name="Apo", 
                      description="Say hello to the Apatosaurus! If you're a fan of this herbivore, show off your devotion by rocking this adorable Apo design.", 
                      size="Small", category="Dinosaurs", price=randint(3, 9), 
                      image="https://inkboxdesigns.imgix.net/product_stencils/4805914067022_printable_1623704578.jpg?auto=compress,format&con=100&gam=100&pad=20&bg=F4F5F7&fit=fill&duotone=000000,F4F5F7&w=625&fit=max&auto=compress,format&q=50&dpr=2")
        
        dino4 = Tattoo(name="Astrosaurus", 
                      description="Meet Astrosaurus! Outer space AND dinosaurs, a winning combo for sure.", 
                      size="Large", category="Dinosaurs", price=randint(9, 18), 
                      image="https://inkboxdesigns.imgix.net/product_stencils/4286844731470_printable_1595859342.jpg?auto=compress,format&con=100&gam=100&pad=20&bg=F4F5F7&fit=fill&duotone=000000,F4F5F7&w=625&fit=max&auto=compress,format&q=50&dpr=2")
        
        dino5 = Tattoo(name="Chrome Dino", 
                      description="Ooops...webpage not found, but a cool tattoo was.", 
                      size="Medium", category="Dinosaurs", price=randint(5, 12), 
                      image="https://inkboxdesigns.imgix.net/new_designs/cyan/cut_25331_20210611043924_cyan.jpg?auto=compress,format&con=100&gam=100&pad=20&bg=F4F5F7&fit=fill&duotone=000000,F4F5F7&w=625&fit=max&auto=compress,format&q=50&dpr=2")
        
        dino6 = Tattoo(name="Not Today", 
                      description="This dino is done for the day. Channel the IDGAF attitude of the tired triceratops while wearing this crazy cute tattoo.", 
                      size="Medium", category="Dinosaurs", price=randint(5, 12), 
                      image="https://inkboxdesigns.imgix.net/new_designs/cyan/cut_20624_20200707093945_cyan.jpg?auto=compress,format&con=100&gam=100&pad=20&bg=F4F5F7&fit=fill&duotone=000000,F4F5F7&w=625&fit=max&auto=compress,format&q=50&dpr=2")
        
        dinosaurs = [dino1, dino2, dino3, dino4, dino5, dino6]

        #Animals
        animal1 = Tattoo(name="Meow", 
                      description="Meowza! This simple, but fun design is perfect for all cat lovers.", 
                      size="Small", category="Animals", price=randint(3, 9), 
                      image="https://inkboxdesigns.imgix.net/new_designs/cyan/cut_19683_20200928084914_cyan.jpg?auto=compress,format&con=100&gam=100&pad=20&bg=F4F5F7&fit=fill&duotone=000000,F4F5F7&w=625&fit=max&auto=compress,format&q=50&dpr=2")

        animal2 = Tattoo(name="Otters", 
                      description="Let's stick together. A perfect tattoo for you and someone you're close to (or if you just love otters).", 
                      size="Small", category="Animals", price=randint(3, 9), 
                      image="https://inkboxdesigns.imgix.net/product_stencils/4286492934222_1574954546.jpg?auto=compress,format&con=100&gam=100&pad=20&bg=F4F5F7&fit=fill&duotone=000000,F4F5F7&w=625&fit=max&auto=compress,format&q=50&dpr=2")
        
        animal3 = Tattoo(name="Bee", 
                      description="Stay buzzin' with this small tattoo. Save the bees!", 
                      size="Small", category="Animals", price=randint(3, 9), 
                      image="https://inkboxdesigns.imgix.net/artist_designs/Xr4Ias3Dm8KlgZnIzWZ0BpVm2ZCNqOijxDwufjVs.jpg?auto=compress,format&con=100&gam=100&pad=20&bg=F4F5F7&fit=fill&duotone=000000,F4F5F7&w=625&fit=max&auto=compress,format&q=50&dpr=2")
        
        animal4 = Tattoo(name="Bear", 
                      description="Peek-a-bear?", 
                      size="Large", category="Animals", price=randint(9, 18), 
                      image="https://inkboxdesigns.imgix.net/new_designs/cyan/cut_21456_20200730041042_cyan.jpg?auto=compress,format&con=100&gam=100&pad=20&bg=F4F5F7&fit=fill&duotone=000000,F4F5F7&w=625&fit=max&auto=compress,format&q=50&dpr=2")

        animals = [animal1, animal2, animal3, animal4]

        #Objects
        object1 = Tattoo(name="Heart", 
                      description="Small, simple, and timeless. Now, you can really wear your heart on your sleeve.", 
                      size="Small", category="Objects", price=randint(3, 9), 
                      image="https://inkboxdesigns.imgix.net/new_designs/cyan/cut_16325_20200402062124_cyan.jpg?auto=compress,format&con=100&gam=100&pad=20&bg=F4F5F7&fit=fill&duotone=000000,F4F5F7&w=625&fit=max&auto=compress,format&q=50&dpr=2")

        object2 = Tattoo(name="Airplane", 
                      description="Caught the travel bug? Well, it's time to catch this tattoo too.", 
                      size="Medium", category="Objects", price=randint(5, 12), 
                      image="https://inkboxdesigns.imgix.net/product_stencils/cyan/cut_4251-2.jpg?auto=compress,format&con=100&gam=100&pad=20&bg=F4F5F7&fit=fill&duotone=000000,F4F5F7&w=625&fit=max&auto=compress,format&q=50&dpr=2")
        
        object3 = Tattoo(name="Balloon Animal", 
                      description="Stay playful with this tattoo that's full of hot air.", 
                      size="Small", category="Objects", price=randint(3, 9), 
                      image="https://inkboxdesigns.imgix.net/artist_designs/DdWsV5EnzC0mAaZnipyry1bCheOngusyptcSdyoh.jpg?auto=compress,format&con=100&gam=100&pad=20&bg=F4F5F7&fit=fill&duotone=000000,F4F5F7&w=625&fit=max&auto=compress,format&q=50&dpr=2")

        objects = [object1, object2, object3]

        db.session.add_all(dinosaurs)
        db.session.add_all(nature)
        db.session.add_all(animals)
        db.session.add_all(objects)
        db.session.commit()

        print("Seed done!")

