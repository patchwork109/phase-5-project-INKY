import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import CartItem from "./CartItem";
import EmptyCart from "./EmptyCart";
import { UserContext } from "../context/user";

function Cart () {

    const [tattoosInCart, setTattoosInCart] = useState([])
    const [areTattoosFound, setAreTattoosFound] = useState(false)
    const { currentCart, setCurrentCart } = useContext(UserContext);

    console.log(currentCart)

    // this solution doesn't work if a user removes all of the items in their cart
    // they don't hit an error, so the catch isn't triggered
    // try if cart_tattoos is empty, then setAreTattoosFound(false)
    useEffect(() => {
        try {
            fetch(`/carts/${currentCart.id}`)
            .then(r => r.json())
            .then(r => {
                console.log(r)
                setAreTattoosFound(true)
                setTattoosInCart(r.cart_tattoos)
            })
        } catch {
            setAreTattoosFound(false)
        }
    }, [])

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