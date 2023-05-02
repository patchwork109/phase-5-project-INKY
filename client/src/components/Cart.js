import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import CartItem from "./CartItem";
import EmptyCart from "./EmptyCart";

function Cart ({currentCart, setCurrentCart}) {

    // tattoosInCart relates to CartTattoo instances (not Carts!)
    const [tattoosInCart, setTattoosInCart] = useState([])
    const [areTattoosFound, setAreTattoosFound] = useState(false)

    console.log(currentCart)

    // need to figure out why the areTattoosFound isn't working
    const handleResponse = r => {
        if (r.ok) {
            console.log("STATUS:", r.status)
            r.json().then(r => {
                console.log(r)
                setTattoosInCart(r.cart_tattoos)
                // console.log(areTattoosFound)
                // console.log(tattoosInCart)
                setAreTattoosFound(true)
                // console.log(areTattoosFound)
                // console.log(tattoosInCart)
            })
        } else {
            console.error("STATUS:", r.status)
            r.text().then(r => {
                console.warn(r)
                // console.log(areTattoosFound)
                // console.log(tattoosInCart)
                setAreTattoosFound(false)
                // console.log(areTattoosFound)
                // console.log(tattoosInCart)
            })
        }
    }

    useEffect(() => {
        fetch(`/carts/${currentCart.id}`)
        .then(r => handleResponse(r))
    }, [])

    // console.log(areTattoosFound)
    // console.log(tattoosInCart)

    const handleEditTattooInCart = (updatedCartTattooObj) => {
        const updatedTattoos = tattoosInCart.map((cartTattoo) => {
            if(cartTattoo.id === updatedCartTattooObj.id) {
                return updatedCartTattooObj;
            } else {
                return cartTattoo
            }
        })
        setTattoosInCart(updatedTattoos)
    }

    const handleRemoveItemInCart = doomedCartTattooId => {
        const afterDeletedItems = tattoosInCart.filter(cartTattoo => {
          return cartTattoo.id !== doomedCartTattooId
        })
    
        setTattoosInCart(afterDeletedItems)
    }

    const displayCartTattoos = tattoosInCart.map(cartTattoo => {
        return (
            <CartItem key={cartTattoo.id}
                cartTattoo={cartTattoo}
                handleEditTattooInCart={handleEditTattooInCart}
                handleRemoveItemInCart={handleRemoveItemInCart}
            />
        )
    })

    const history = useHistory();
    const handleOrderSubmit = (e) => {
        e.preventDefault()
        history.push("/ordersuccess");

        setCurrentCart(null)
    }

    return (
        <div>
            I'm the cart page!
            {areTattoosFound ? (
                <div>
                    {displayCartTattoos}
                    <form onSubmit={handleOrderSubmit}>
                        <button type="submit">PLACE YOUR ORDER</button>
                    </form>
                </div> ) : (
                    <EmptyCart /> )
            }
        </div>
    )
}

export default Cart;