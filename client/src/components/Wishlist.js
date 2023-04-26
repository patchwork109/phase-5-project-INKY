import React, { useState, useEffect } from "react";
import WishlistTattooCard from "./WishlistTattooCard";

function Wishlist () {

    const [favoritedTattoos, setFavoritedTattoos] = useState([])

    useEffect(() => {
        fetch('http://127.0.0.1:5555/favorites')
        .then(response => response.json())
        .then(setFavoritedTattoos)
    }, [])

    console.log(favoritedTattoos)

    const renderFavoritedTattoos = favoritedTattoos.map(favoritedTattoo => {
        return <WishlistTattooCard key={favoritedTattoo.id}
            id = {favoritedTattoo.id}
            name = {favoritedTattoo.tattoo.name}
            category = {favoritedTattoo.tattoo.category}
            description = {favoritedTattoo.tattoo.description}
            size = {favoritedTattoo.tattoo.size}
            price = {favoritedTattoo.tattoo.price}
            image = {favoritedTattoo.tattoo.image}
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