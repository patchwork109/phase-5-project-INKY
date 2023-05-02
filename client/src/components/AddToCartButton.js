import React from "react";

function AddToCartButton () {

    const handleAddToCartClick = () => {

        const newCartTattoo = {
            quantity: 1,
            // cart_id: currentCart.id,
            // tattoo_id: id
        }
    
        fetch("/cart_tattoos", {
            method: "POST",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(newCartTattoo)
        })
        .then(r => r.json())
        // .then(setToggleAddToCart(toggleAddToCart => !toggleAddToCart))
    }

    return (
        <div>
            I'm the add to cart button!
            <button onClick={handleAddToCartClick}>Add to Cart!</button>
        </div>
    )
}

export default AddToCartButton;