import React, { useState, useEffect } from "react";
import WishlistTattooCard from "./WishlistTattooCard";
import EmptyWishlist from "./EmptyWishlist";

function Wishlist () {

    const [favoritedTattoos, setFavoritedTattoos] = useState([])
    // const [areWishlistTattoosFound, setAreWishlistTattoosFound] = useState(false)


    // need to only fetch favorited tattoos that have been favorited by a specific user
    // fetch to the user/id route 
    useEffect(() => {
        fetch('/favorites')
        .then(response => response.json())
        .then(setFavoritedTattoos)
    }, [])

    const handleRemoveFavoritedTattoo = doomedFavoriteId => {
        console.log("I'm about to get deleted:", doomedFavoriteId)

        const afterDeletedItems = favoritedTattoos.filter(favoritedTattoo => {
            return favoritedTattoo.id !== doomedFavoriteId
        })

        setFavoritedTattoos(afterDeletedItems)
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
            {renderFavoritedTattoos}
            {/* { areWishlistTattoosFound ? 
                {renderFavoritedTattoos} : <EmptyWishlist />
            } */}
        </div>
    )
}

export default Wishlist;