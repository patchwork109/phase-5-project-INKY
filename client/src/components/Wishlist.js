import React, { useState, useEffect } from "react";
import WishlistTattooCard from "./WishlistTattooCard";
import EmptyWishlist from "./EmptyWishlist";

function Wishlist ({user}) {

    const [favoritedTattoos, setFavoritedTattoos] = useState([])
    const [areWishlistTattoosFound, setAreWishlistTattoosFound] = useState(false)

    // try getting the user from the cookie instead of state
    console.log(user)

    useEffect(() => {
        fetch(`/users/${user.id}`)
        .then(r => r.json())
        .then(r => {
            if (r.favorites.length === 0) {
                console.log("No favorites to see here!")
                setAreWishlistTattoosFound(false)
            } else {
                console.log(r)
                setAreWishlistTattoosFound(true)
                setFavoritedTattoos(r.favorites)
            }
        })
    }, [])

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
        />
    })

    return (
        <div>
            I'm the wishlist!
            {/* {renderFavoritedTattoos} */}
            { areWishlistTattoosFound ? 
                renderFavoritedTattoos : <EmptyWishlist />
            }
        </div>
    )
}

export default Wishlist;