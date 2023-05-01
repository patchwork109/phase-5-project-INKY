import React, { useState } from "react";
import Card from '@mui/material/Card';


function TattooCard ({id, name, category, description, size, price, image, user, currentCart, setCurrentCart}) {

    // need to update my default value for state
    // to be whatever is the current values is in the DB
    const [toggleFavorited, setToggleFavorited] = useState(true)
    const [toggleAddToCart, setToggleAddToCart] = useState(true)

    const handleFavoriteClick = () => {

        const newFavoritedTattoo = {
            is_favorited: toggleFavorited,
            user_id: user.id,
            tattoo_id: id
        }

        const handleResponse = r => {
            if (r.ok) {
                console.log( "STATUS:", r.status)
                r.json().then(setToggleFavorited(toggleFavorited => !toggleFavorited))
            } else {
                console.error("STATUS:", r.status)
                r.text().then(console.warn)
            }
        }

        fetch("/favorites", {
            method: "POST",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(newFavoritedTattoo)
        })
        .then(r => handleResponse(r))
    }


    const handleAddToCartClick = () => {

        // if currentCart is null, create (POST) a new cart instance and add cart_tattoos to it
        // if currentCart exists, just add cart_tattoos to it
        if (currentCart === null) {

            const new_cart= {
                user_id: user.id
            }
    
            const handleNewCartResponse = r => {
                if (r.ok) {
                    console.log( "STATUS:", r.status)
                    r.json().then(cartObj => setCurrentCart(cartObj))
                } else {
                    console.error("STATUS:", r.status)
                    r.text().then(console.warn)
                }
            }

            fetch("/carts", {
                method: "POST",
                headers:{"Content-Type":"application/json"},
                body: JSON.stringify(new_cart)
            })
            .then(r => handleNewCartResponse(r))

            // this is likely happening before state is set so it's still null
            const newCartTattoo = {
                quantity: 1,
                // cart_id: currentCart.id,
                cart_id: 1,
                tattoo_id: id
            }
    
            const handleResponse = r => {
                if (r.ok) {
                    console.log( "STATUS:", r.status)
                    r.json().then(setToggleAddToCart(toggleAddToCart => !toggleAddToCart))
                } else {
                    console.error("STATUS:", r.status)
                    r.text().then(console.warn)
                }
            }
    
            fetch("/cart_tattoos", {
                method: "POST",
                headers: {"Content-Type":"application/json"},
                body: JSON.stringify(newCartTattoo)
            })
            .then(r => handleResponse(r))

        } else {

            const newCartTattoo = {
                quantity: 1,
                cart_id: currentCart.id,
                tattoo_id: id
            }
    
            const handleResponse = r => {
                if (r.ok) {
                    console.log( "STATUS:", r.status)
                    r.json().then(setToggleAddToCart(toggleAddToCart => !toggleAddToCart))
                } else {
                    console.error("STATUS:", r.status)
                    r.text().then(console.warn)
                }
            }
    
            fetch("/cart_tattoos", {
                method: "POST",
                headers: {"Content-Type":"application/json"},
                body: JSON.stringify(newCartTattoo)
            })
            .then(r => handleResponse(r))
        }
    }

    return (
        <div>
            <Card sx={{  maxWidth: 345}} className="tattooCard">
                <h3>{name}</h3>
                Category: {category}
                <br/>
                Description: {description}
                <br/>
                Size: {size}
                <br/>
                Price: ${price}
                <br/>
                <img src={image} alt={name} />
                <br/>
                <div>
                    {toggleFavorited ? (
                        <button onClick={handleFavoriteClick}>Add to Wishlist!</button>
                    ) : (
                        // <button onClick={handleFavoriteClick}>Remove from Wishlist</button>
                        null
                    )}
                </div>
                <div>
                    {toggleAddToCart ? (
                        <button onClick={handleAddToCartClick}>Add to Cart!</button>
                    ) : (
                        // <button onClick={handleAddToCartClick}>Remove from Cart</button>
                        null
                    )}
                </div>
            </Card>
        </div>
    )
}

export default TattooCard;