import React, { useState, useEffect } from "react";
import WishlistTattooCard from "./WishlistTattooCard";
import EmptyWishlist from "./EmptyWishlist";

function Wishlist () {

    const [favoritedTattoos, setFavoritedTattoos] = useState([])
    // const [areWishlistTattoosFound, setAreWishlistTattoosFound] = useState(false)

    // const handleResponse = r => {
    //     if (r.ok) {
    //         console.log("STATUS:", r.status)
    //         r.json().then(r => {
    //             console.log(r)
    //             setFavoritedTattoos(r)
    //             console.log(areWishlistTattoosFound)
    //             console.log(favoritedTattoos)
    //             setAreWishlistTattoosFound(true)
    //             console.log(areWishlistTattoosFound)
    //             console.log(favoritedTattoos)
    //         })
    //     } else {
    //         console.error("STATUS:", r.status)
    //         r.text().then(r => {
    //             console.warn(r)
    //             console.log(areWishlistTattoosFound)
    //             console.log(favoritedTattoos)
    //             setAreWishlistTattoosFound(false)
    //             console.log(areWishlistTattoosFound)
    //             console.log(favoritedTattoos)
    //         })
    //     }
    // }

    // need to only fetch favorited tattoos that have been favorited by a specific user
    useEffect(() => {
        fetch('/favorites')
        .then(response => response.json())
        .then(setFavoritedTattoos)
    }, [])

    // useEffect(() => {
    //     fetch('/favorites')
    //     .then(r => handleResponse(r))
    // }, [])

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
            // updateFavoritedTattoo = {updateFavoritedTattoo}
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