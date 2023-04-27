import React, { useState } from "react";
import Card from '@mui/material/Card';


// this is the id of the tattoo, not the favorite
function TattooCard ({id, name, category, description, size, price, image}) {

    // need to update my default value for state
    // to be whatever is the current values is in the DB
    const [toggleFavorited, setToggleFavorited] = useState(true)
    const [toggleAddToCart, setToggleAddToCart] = useState(true)

    const handleFavoriteClick = () => {

        setToggleFavorited(toggleFavorited => !toggleFavorited)

        // should I add tattoo_id = id and user_id = someId? 
        const newFavoritedTattoo = {
            is_favorited: toggleFavorited
        }

        const handleResponse = r => {
            if (r.ok) {
                console.log( "STATUS:", r.status)
                r.json().then(console.log)
            } else {
                console.error("STATUS:", r.status)
                r.text().then(console.warn)
            }
        }

        console.log(id)

        // is this actually the right id?
        // Favorting the dinosaur results in an error
        // should this be a post (to add a new favorite), then a delete to remove it?
        fetch(`http://127.0.0.1:5555/favorites/${id}`, {
            method: "PATCH",
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