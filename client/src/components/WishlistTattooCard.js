import React from "react";

function WishlistTattooCard ({id, name, category, description, size, price, image}) {



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
        </div>
    )
}

export default WishlistTattooCard;