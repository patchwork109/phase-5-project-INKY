import React from "react";
import Card from '@mui/material/Card';

function WishlistTattooCard ({id, name, category, description, size, price, image}) {


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
            </Card>
        </div>
    )
}

export default WishlistTattooCard;