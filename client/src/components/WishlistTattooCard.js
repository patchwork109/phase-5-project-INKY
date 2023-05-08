import React from "react";
import Card from '@mui/material/Card';

function WishlistTattooCard ({id, name, category, description, size, price, image, handleRemoveFavoritedTattoo, setTattoos, is_favorited}) {
        
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
            </Card>
        </div>
    )
}

export default WishlistTattooCard;