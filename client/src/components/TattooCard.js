import React, { useState } from "react";
import Card from '@mui/material/Card';


function TattooCard ({id, name, category, description, size, price, image, user}) {

    // need to update my default value for state
    // to be whatever is the current values is in the DB
    // use association proxy?
    const [toggleFavorited, setToggleFavorited] = useState(true)
    const [toggleAddToCart, setToggleAddToCart] = useState(true)

    const handleFavoriteClick = () => {

        setToggleFavorited(toggleFavorited => !toggleFavorited)

        // user.id is showing as undefined which errors out the POST
        // hardcoding for now, but need to revisit
        const newFavoritedTattoo = {
            is_favorited: toggleFavorited,
            user_id: user.id,
            tattoo_id: id
        }

        console.log(user)

        const handleResponse = r => {
            if (r.ok) {
                console.log( "STATUS:", r.status)
                r.json().then(console.log)
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
        setToggleAddToCart(toggleAddToCart => !toggleAddToCart)
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
                        <button onClick={handleFavoriteClick}>Remove from Wishlist</button>
                    )}
                </div>
                <div>
                    {toggleAddToCart ? (
                        <button onClick={handleAddToCartClick}>Add to Cart!</button>
                    ) : (
                        <button onClick={handleAddToCartClick}>Remove from Cart</button>
                    )}
                </div>
            </Card>
        </div>
    )
}

export default TattooCard;