import React, { useState, useEffect } from "react";
import WishlistTattooCard from "./WishlistTattooCard";
import EmptyWishlist from "./EmptyWishlist";
import Login from "./Login";
import Grid from '@mui/material/Grid';

function Wishlist ({user, onLogin, setTattoos, count, setCount}) {

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
            count = {count}
            setCount = {setCount}
        />
    })

    return (
        <div>
            {(user === null) ? 
                <div><Login onLogin={onLogin}/></div> : 
                <div>
                    { areWishlistTattoosFound ?
                        (<div>
                            <h2 style={{ color: '#aceca0', fontFamily: 'Bebas Neue', fontSize: 50, textAlign: 'left', marginLeft: 48, marginTop: 50, marginBottom: 50}}>Your Wishlist</h2> 
                            <Grid container spacing={3} sx={{ display: 'flex', justifyContent: 'center', pl: 1.5 }}>
                                {renderFavoritedTattoos}
                            </Grid> 
                        </div> ) : (
                        <EmptyWishlist />)}
                </div>
            }
        </div>
    )
}

export default Wishlist;