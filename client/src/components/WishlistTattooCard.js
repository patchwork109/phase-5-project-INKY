import React, { useContext } from "react";
import { UserContext } from "../context/user";
import Card from '@mui/material/Card';

function WishlistTattooCard ({id, name, category, description, size, price, image, handleRemoveFavoritedTattoo, setTattoos, tattoo_id, is_in_cart, setFavoritedTattoos}) {

    const { currentCart } = useContext(UserContext);
        
    const handleDeleteResponse = r => {
        if (r.ok) {
            console.log( "STATUS:", r.status)
            r.json().then(console.log)  
        } else {
            console.error("STATUS:", r.status)
            r.text().then(console.warn)
        }
    }

    const handleRemoveFavoriteClick = () => {
        fetch(`/favorites/${id}`, {
            method: "DELETE",
        })
        .then(r => handleDeleteResponse(r))

        handleRemoveFavoritedTattoo(id)

        setTattoos(currentTattoos => currentTattoos.map(eachCurrentTattoo => {
            if (eachCurrentTattoo.id === id ) {
                const theCurrentTattoo = {
                    ...eachCurrentTattoo,
                    is_favorited: null
                }
                return theCurrentTattoo
            } else {
                return eachCurrentTattoo
            }
        })
        )
    }

    const handleAddToCartClick = () => {

        const newCartTattoo = {
            quantity: 1,
            cart_id: currentCart.id,
            tattoo_id: tattoo_id
        }

        const handleResponse = r => {
            if (r.ok) {
                console.log( "STATUS:", r.status)
                r.json().then(r => {
                    console.log(r)
                    
                    setTattoos(currentTattoos => currentTattoos.map(eachCurrentTattoo => {
                        if (eachCurrentTattoo.id === tattoo_id ) {
                            const theCurrentTattoo = {
                                ...eachCurrentTattoo,
                                is_in_cart: r
                            }
                            return theCurrentTattoo
                        } else {
                            return eachCurrentTattoo
                        }
                    }))

                    setFavoritedTattoos(currentTattoos => currentTattoos.map(eachCurrentTattoo => {
                        if (eachCurrentTattoo.id === tattoo_id ) {
                            const theCurrentTattoo = {
                                ...eachCurrentTattoo,
                                is_in_cart: r
                            }
                            return theCurrentTattoo
                        } else {
                            return eachCurrentTattoo
                        }
                    }))
                })
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
                <button onClick={handleRemoveFavoriteClick}>Remove from Wishlist</button>
                <div>
                    { (!is_in_cart) ? (
                        <button onClick={handleAddToCartClick}>Add to Cart!</button>
                    ) : (
                        null
                    )}
                </div>
            </Card>
        </div>
    )
}

export default WishlistTattooCard;