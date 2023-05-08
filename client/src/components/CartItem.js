import React, { useState } from "react";
import Card from '@mui/material/Card';

function CartItem ({cartTattoo, handleEditTattooInCart, handleRemoveItemInCart, setTattoos}) {

    const [quantity, setQuantity] = useState(cartTattoo.quantity)

    const handleQuantityIncrease = () => {
        setQuantity(quantity => (quantity + 1))

        const updatedQuantity = {
            quantity: (quantity + 1)
        }

        fetch(`/cart_tattoos/${cartTattoo.id}`, {
            method: "PATCH",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(updatedQuantity)
        })
        .then((r) => r.json())
        .then(handleEditTattooInCart);
    }

    const handleQuantityDecrease = () => {

        if (quantity > 1) {
            setQuantity(quantity => (quantity - 1))

            const updatedQuantity = {
                quantity: (quantity - 1)
            }
    
            fetch(`/cart_tattoos/${cartTattoo.id}`, {
                method: "PATCH",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(updatedQuantity)
            })
            .then((r) => r.json())
            .then(handleEditTattooInCart);
        }
    }


    const handleDeleteResponse = r => {
        if (r.ok) {
            console.log( "STATUS:", r.status)
            r.json().then(console.log)  
        } else {
            console.error("STATUS:", r.status)
            r.text().then(console.warn)
        }
    }

    const handleDeleteClick = () => {
        fetch(`/cart_tattoos/${cartTattoo.id}`, {
            method: "DELETE"})
        .then(r => handleDeleteResponse(r))

        handleRemoveItemInCart(cartTattoo.id)

        setTattoos(currentTattoos => currentTattoos.map(eachCurrentTattoo => {
            if (eachCurrentTattoo.id === cartTattoo.id ) {
                const theCurrentTattoo = {
                    ...eachCurrentTattoo,
                    is_in_cart: null
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
                <h3>{cartTattoo.tattoo.name}</h3>
                Category: {cartTattoo.tattoo.category}
                <br/>
                Description: {cartTattoo.tattoo.description}
                <br/>
                Size: {cartTattoo.tattoo.size}
                <br/>
                Quantity: 
                    <button onClick={handleQuantityDecrease}>-</button>
                    {cartTattoo.quantity}
                    <button onClick={handleQuantityIncrease}>+</button>
                <br/>
                Price: ${cartTattoo.tattoo.price.toFixed(2)}
                <br/>
                Total: ${cartTattoo.quantity * cartTattoo.tattoo.price.toFixed(2)}
                <br/>
                <img src={cartTattoo.tattoo.image} alt={cartTattoo.tattoo.name} />
                <br/>
                <button onClick={handleDeleteClick}>Remove from Cart</button>
            </Card>
        </div>
    )
}

export default CartItem;