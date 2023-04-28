import React, { useState, useEffect } from "react";
import WishlistTattooCard from "./WishlistTattooCard";

function Wishlist () {

    const [favoritedTattoos, setFavoritedTattoos] = useState([])

    useEffect(() => {
        fetch('http://127.0.0.1:5555/favorites')
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

    // const updateFavoritedTattoo = aFavoriteObject => {
    //     console.log("I'm about to get updated:", aFavoriteObject);
    
    //     const updatedFavorites = favoritedTattoos.map(favoritedTattoo => {
    //         if (favoritedTattoo.id !== aFavoriteObject.id) {
    //             return favoritedTattoo
    //         } else {
    //             return aFavoriteObject
    //         }
    //     })
    //     console.log(updatedFavorites)
    //     setFavoritedTattoos(updatedFavorites)
    // }

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
        </div>
    )
}

export default Wishlist;