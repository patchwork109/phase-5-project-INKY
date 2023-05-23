# INKY
### Flatiron School Phase 5 FullStack Application 
### Developed by: Sam Genevay

<img width="1506" alt="Screenshot 2023-05-22 at 7 58 32 PM" src="https://github.com/patchwork109/phase-5-project-INKY/assets/115511311/cb184916-d12d-43d5-8b84-7700043a2017">

## Purpose
Ever considered getting a tattoo, but you weren't quite ready to make the commitment? Not sure if that [insert cool tattoo idea here] would really be the thing you wanted *forever* on your [insert body part here]? No problem, that's where **INKY** comes in. INKY offers tattoos for now, not forever.


## Built With
- ReactJS
- Flask
- Python
- Material UI
- SQLAlchemy
- Formik


## Getting Started
1. Fork and clone the repo:
  ```sh
  git clone https://github.com/patchwork109/phase-5-project-INKY
  ```
2. Install your environment dependencies and enter virtual environment:
```sh
pipenv install
```
```sh
pipenv shell
```
3. From the client directory, install client dependencies:
```sh
npm install
```
4. From the client directory, start the front end:
```sh
npm start
```
5. From the server directory, start the back end:
```sh
python app.py
```


## How to Use this Application 
INKY is a discovery platform and online store front for ordering temporary tattoos. Users can learn about INKY through the homepage and read about us on the Our Story page. 
<img width="1504" alt="Screenshot 2023-05-22 at 7 58 55 PM" src="https://github.com/patchwork109/phase-5-project-INKY/assets/115511311/021264f5-559d-4b10-93a2-9e837d7183f3">

If they'd like to check out tattoos, create a wishlist, or add tattoos to their cart, they'll be prompted to login or sign up.
<img width="659" alt="Screenshot 2023-05-22 at 7 59 24 PM" src="https://github.com/patchwork109/phase-5-project-INKY/assets/115511311/8b58e852-f9af-4070-a2f8-d8160c81f843">

After logging in or creating a new account, they'll be able to view all of the tattoos on INKY. To help them find the right tattoo for them, they can filter by Category or by Size, sort by Price (low to high and high to low), and search tattoos by Name. 
<img width="1493" alt="Screenshot 2023-05-22 at 7 59 49 PM" src="https://github.com/patchwork109/phase-5-project-INKY/assets/115511311/a3c61df5-5efe-4423-bf5b-fd5f08ab1c4c">

With the amazing selection of tattoos on INKY, there's no doubt they'll want to add a few to their Wishlist. Users can easily favorite and unfavorite tattoos which will update their Wishlist. 
<img width="1502" alt="Screenshot 2023-05-22 at 8 00 18 PM" src="https://github.com/patchwork109/phase-5-project-INKY/assets/115511311/050ac35e-b2bd-4c6b-a389-df658830a6cb">

Users can also add tattoos to their cart. In their cart, they can change the quantity or remove the tattoo. These actions will update the subtotal, total, and the cart indicator icon which tracks the number of items in the cart. 
<img width="1484" alt="Screenshot 2023-05-22 at 8 00 56 PM" src="https://github.com/patchwork109/phase-5-project-INKY/assets/115511311/b04d6fb8-2f6e-412c-91cd-ffc584c706e0">

Lastly, users can add custom tattoos to INKY which become available on the main tattoos page. Upon adding a new tattoo, they'll see a modal letting them know the upload has been successful. 
<img width="983" alt="Screenshot 2023-05-22 at 8 01 15 PM" src="https://github.com/patchwork109/phase-5-project-INKY/assets/115511311/746e1380-9b35-47ba-b743-4615aadf7afd">
<img width="1000" alt="Screenshot 2023-05-22 at 8 18 11 PM" src="https://github.com/patchwork109/phase-5-project-INKY/assets/115511311/cdcb6454-ede5-4086-8854-5a7439c1e927">


## Special Features
- User authentication
- Dynamic cart icon showing number of items
- Home page carousel w/ featured reviews
- Filter, sort, and search functionality
- Form validation w/ Formik and yup libraries
