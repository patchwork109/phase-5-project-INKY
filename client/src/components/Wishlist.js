import React, { useState, useEffect } from "react";
import WishlistTattooCard from "./WishlistTattooCard";
import EmptyWishlist from "./EmptyWishlist";
import Login from "./Login";

function Wishlist ({user, onLogin, setTattoos}) {

    const [favoritedTattoos, setFavoritedTattoos] = useState([])
    const [areWishlistTattoosFound, setAreWishlistTattoosFound] = useState(false)

    console.log(user)

    useEffect(() => {
        try {
            fetch(`/users/${user.id}`)
            .then(r => r.json())
            .then(r => {
                if (r.favorites.length === 0) {
                    console.log("No favorites to see here!")
                    setAreWishlistTattoosFound(false)
                } else {
                    console.log(r.favorites)
                    setAreWishlistTattoosFound(true)
                    setFavoritedTattoos(r.favorites)
                }
            })
        } catch {
            console.log("Are we hitting this catch block?")
            setAreWishlistTattoosFound(false)
        }
    }, []) // eslint-disable-line

    const handleRemoveFavoritedTattoo = doomedFavoriteId => {
        console.log("I'm about to get deleted:", doomedFavoriteId)

        const afterDeletedItems = favoritedTattoos.filter(favoritedTattoo => {
            return favoritedTattoo.id !== doomedFavoriteId
        })

        if (afterDeletedItems.length === 0) {
            setAreWishlistTattoosFound(false)
            setFavoritedTattoos(afterDeletedItems)
        } else {
            setFavoritedTattoos(afterDeletedItems)
        }
    }

    const renderFavoritedTattoos = favoritedTattoos.map(favoritedTattoo => {
        return <WishlistTattooCard key={favoritedTattoo.id}
            id = {favoritedTattoo.id}
            name = {favoritedTattoo.tattoo.name}
            category = {favoritedTattoo.tattoo.category}
            description = {favoritedTattoo.tattoo.description}
            size = {favoritedTattoo.tattoo.size}
            price = {favoritedTattoo.tattoo.price}
            image = {favoritedTattoo.tattoo.image}
            handleRemoveFavoritedTattoo = {handleRemoveFavoritedTattoo}
            setTattoos = {setTattoos}
            setFavoritedTattoos = {setFavoritedTattoos}
            tattoo_id = {favoritedTattoo.tattoo.id}
            is_in_cart = {favoritedTattoo.tattoo.is_in_cart}
        />
    })

    return (
        <div>
            {(user === null) ? 
                <div>Log in or create an account to start adding tattoos to your Wishlist!<Login onLogin={onLogin}/></div> : 
                <div>
                    { areWishlistTattoosFound ? renderFavoritedTattoos : <EmptyWishlist />}
                </div>
            }
        </div>
    )
}

export default Wishlist;