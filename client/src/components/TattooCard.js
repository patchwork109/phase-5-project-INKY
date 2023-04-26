import React, { useState } from "react";

function TattooCard ({id, name, category, description, size, price, image, eachTattoo}) {

    // need to update my default value for state
    const [toggleFavorited, setToggleFavorited] = useState(true)

    const handleFavoriteClick = () => {

        setToggleFavorited(toggleFavorited => !toggleFavorited)

        const newFavoritedTattoo = {
            is_favorited: toggleFavorited,
        }

        const handleResponse = r => {
            if (r.ok) {
                console.log( "STATUS:", r.status)
                r.json().then(console.log)
            } else {
                console.error("STATUS:", r.status)
                r.text().then(console.warn)
            }
        }

        // is this actually the right id?
        fetch(`http://127.0.0.1:5555/favorites/${id}`, {
            method: "PATCH",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(newFavoritedTattoo)
        })
            .then(r => handleResponse(r))
    }

    return (
        <div>
            <h3>{name}</h3>
            <ul>
                <li>{category}</li>
                <li>{description}</li>
                <li>{size}</li>
            </ul>
            ${price}
            <br />
            <img src={image} alt={name} />
            <br />
            <div>
                {toggleFavorited ? (
                    <button onClick={handleFavoriteClick}>Like!</button>
                ) : (
                    <button onClick={handleFavoriteClick}>Un-like!</button>
                )}
            </div>
        </div>
    )
}

export default TattooCard;