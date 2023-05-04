import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import CartItem from "./CartItem";
import EmptyCart from "./EmptyCart";
import { UserContext } from "../context/user";

function Cart () {

    const [tattoosInCart, setTattoosInCart] = useState([]);
    const [areTattoosFound, setAreTattoosFound] = useState(false);
    const [total, setTotal] = useState(null);
    const { currentCart, setCurrentCart } = useContext(UserContext);

    console.log(currentCart)

    // getting an error on reload and hitting the catch block
    // when page is reloaded, the currentCart is set to null so the fetch breaks
    // the currentCart is set when someone visits the tattoo page

    useEffect(() => {
        try {
            fetch(`/carts/${currentCart.id}`)
            .then(r => r.json())
            .then(cart => {
                if (cart.cart_tattoos.length === 0) {
                    console.log("Cart tattoos is empty!")
                    setAreTattoosFound(false)
                } else {
                    console.log(cart)
                    console.log(cart.tattoo)

                    let total = 0;
                    cart.cart_tattoos.forEach(cart_tattoo => {
                        total += cart_tattoo.quantity * cart_tattoo.tattoo.price
                    });

                    setAreTattoosFound(true)
                    setTattoosInCart(cart.cart_tattoos)
                    setTotal(total)
                }
            })
        } catch {
            console.log("Are we hitting this catch block?")
            setAreTattoosFound(false)
        }
    }, []) // eslint-disable-line

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

        if (afterDeletedItems.length === 0) {
            setAreTattoosFound(false)
            setTattoosInCart(afterDeletedItems)
        } else {
            setTattoosInCart(afterDeletedItems)
        }
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
                    <h3>Total: ${total.toFixed(2)}</h3>
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