import React, { useContext } from "react";
import { UserContext } from "../context/user";
import Card from '@mui/material/Card';


function TattooCard ({id, name, category, description, size, price, image, user, is_favorited, is_in_cart, setTattoos}) {

    const { currentCart } = useContext(UserContext);

    const handleFavoriteClick = () => {

        const newFavoritedTattoo = {
            user_id: user.id,
            tattoo_id: id
        }

        const handleResponse = r => {
            if (r.ok) {
                console.log( "STATUS:", r.status)
                r.json().then(r => {
                    console.log(r)
                    console.log(r.id)
                    setTattoos(currentTattoos => currentTattoos.map(eachCurrentTattoo => {
                        if (eachCurrentTattoo.id === id ) {
                            const theCurrentTattoo = {
                                ...eachCurrentTattoo,
                                is_favorited: r
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

        fetch("/favorites", {
            method: "POST",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(newFavoritedTattoo)
        })
        .then(r => handleResponse(r))
    }


    const handleRemoveFavoriteClick = () => {

        const handleDeleteResponse = r => {
            if (r.ok) {
                console.log( "STATUS:", r.status)
                r.json().then(r => {
                    console.log(r)
                })  
            } else {
                console.error("STATUS:", r.status)
                r.text().then(console.warn)
            }
        }

        fetch(`/favorites/${is_favorited.id}`, {
            method: "DELETE",
        })
        .then(r => handleDeleteResponse(r))

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
            tattoo_id: id
        }

        const handleResponse = r => {
            if (r.ok) {
                console.log( "STATUS:", r.status)
                r.json().then(r => {
                    console.log(r)
                    setTattoos(currentTattoos => currentTattoos.map(eachCurrentTattoo => {
                        if (eachCurrentTattoo.id === id ) {
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

    const handleRemoveFromCartClick = () => {

        const handleDeleteResponse = r => {
            if (r.ok) {
                console.log( "STATUS:", r.status)
                r.json().then(r => {
                    console.log(r)
                })  
            } else {
                console.error("STATUS:", r.status)
                r.text().then(console.warn)
            }
        }

        fetch(`/cart_tattoos/${is_in_cart.id}`, {
            method: "DELETE",
        })
        .then(r => handleDeleteResponse(r))

        setTattoos(currentTattoos => currentTattoos.map(eachCurrentTattoo => {
            if (eachCurrentTattoo.id === id ) {
                const theCurrentTattoo = {
                    ...eachCurrentTattoo,
                    is_in_cart: null
                }
                return theCurrentTattoo
            } else {
                return eachCurrentTattoo
            }
        })
        )
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
                    { (!is_favorited) ? (
                        <button onClick={handleFavoriteClick}>Add to Wishlist!</button>
                    ) : (
                        <button onClick={handleRemoveFavoriteClick}>Remove from Wishlist</button>
                    )}
                </div>
                <div>
                    { (!is_in_cart) ? (
                        <button onClick={handleAddToCartClick}>Add to Cart!</button>
                    ) : (
                        <button onClick={handleRemoveFromCartClick}>Remove from Cart</button>
                    )}
                </div>
            </Card>
        </div>
    )
}

export default TattooCard;