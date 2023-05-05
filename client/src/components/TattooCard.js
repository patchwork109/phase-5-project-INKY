import React, { useState, useContext, useEffect } from "react";
import { UserContext } from "../context/user";
import Card from '@mui/material/Card';


function TattooCard ({id, name, category, description, size, price, image, user}) {

    // What do we want to happen? Well,...

    // If a user clicks "Add to Wishlist", 
    // // 1. The tattoo is added (POSTed) to their favorites,
    // // 2. State is updated to show the correct favorites list with the new favorited tattoo,
    // // 3. The "Add to Wishlist" button changes to "Remove from Wishlist",
    // // 4. State is updated to show the correct button text

    // If a user clicks "Remove from Wishlist",
    // // 1. The tattoo is removed (DELETEd) from their favorites,
    // // 2. State is updated to show the correct favorites list w/o the tattoo,
    // // 3. The "Remove from Wishlist" button changes to "Add to Wishlist"
    // // 4. State is updated to show the correct button text

    const [toggleFavorited, setToggleFavorited] = useState(true)
    const [toggleAddToCart, setToggleAddToCart] = useState(true)
    const { currentCart } = useContext(UserContext);

    // useEffect(() => {
	// 	if (user) {
	// 		fetch(`/users/${user.id}`)
	// 		.then(r => r.json())
	// 		.then(r => {
    //             // what here? do we need state to set the favorites?
    //             // someting like setFavoritesbyUser(r.favorites) ?
    //         })
	// 	}
    // }, [user])

    const handleFavoriteClick = () => {

        const newFavoritedTattoo = {
            is_favorited: toggleFavorited,
            user_id: user.id,
            tattoo_id: id
        }

        const handleResponse = r => {
            if (r.ok) {
                console.log( "STATUS:", r.status)
                r.json().then(r => {
                    console.log(r)
                    console.log("Am I favorited?:", r.is_favorited)
                    setToggleFavorited(!toggleFavorited)
                })
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


    // const handleRemoveFavoriteClick = () => {

    //     const handleDeleteResponse = r => {
    //         if (r.ok) {
    //             console.log( "STATUS:", r.status)
    //             r.json().then(r => {
    //                 console.log(r)
    //                 console.log("Is this the right id?:", r.id)
    //             })  
    //         } else {
    //             console.error("STATUS:", r.status)
    //             r.text().then(console.warn)
    //         }
    //     }

    //     // need to update id here
    //     fetch(`/favorites/20`, {
    //         method: "DELETE",
    //     })
    //     .then(r => handleDeleteResponse(r))

    //     handleRemoveFavoritedTattoo(20)
    // }

    // console.log("is current cart null?:", currentCart == null)
    // console.log(currentCart)

    const handleAddToCartClick = () => {

        const newCartTattoo = {
            quantity: 1,
            cart_id: currentCart.id,
            tattoo_id: id
        }
    
        fetch("/cart_tattoos", {
            method: "POST",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(newCartTattoo)
        })
        .then(r => r.json())
        .then(setToggleAddToCart(toggleAddToCart => !toggleAddToCart))
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
                        // <button onClick={handleRemoveFavoriteClick}>Remove from Wishlist</button>
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