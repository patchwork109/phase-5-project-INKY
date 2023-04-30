import React, { useState, useEffect} from "react";
import { useHistory } from "react-router-dom";
import CartItem from "./CartItem";
import EmptyCart from "./EmptyCart";

function Cart () {

    const [tattoosInCart, setTattoosInCart] = useState([])
    const [areTattoosFound, setAreTattoosFound] = useState(false)
    // const [isEditMode, setIsEditMode] = useState(false)
    // const [selectedCartItem, setSelectedCartItem] = useState('')

    // need to figure out why the areTattoosFound isn't working
    const handleResponse = r => {
        if (r.ok) {
            console.log("STATUS:", r.status)
            r.json().then(r => {
                setTattoosInCart(r.cart_tattoos)
            })
            setAreTattoosFound(true)
        } else {
            console.error("STATUS:", r.status)
            r.text().then(r => {
                console.warn(r)
                setAreTattoosFound(false)
            })
        }
    }

    // need to update with the current cart instance id
    // for now, just hardcoding to test other functionality
    useEffect(() => {
        fetch('/carts/1')
        .then(r => handleResponse(r))
    }, [])

    const handleEditTattooInCart = (updatedCartTattooObj) => {
        console.log(updatedCartTattooObj)
        const updatedTattoos = tattoosInCart.map((cartTattoo) => {
            console.log(cartTattoo)
            if(cartTattoo.id === updatedCartTattooObj.id) {
                return updatedCartTattooObj;
            } else {
                return cartTattoo
            }
        })
        setTattoosInCart(updatedTattoos)
        console.log(tattoosInCart)
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
    }

    return (
        <div>
            I'm the cart page!
            {areTattoosFound ? 
                <div>
                    {displayCartTattoos}
                    <form onSubmit={handleOrderSubmit}>
                        <button type="submit">PLACE YOUR ORDER</button>
                    </form>
                </div> :
                <EmptyCart />
            }
        </div>
    )
}

export default Cart;