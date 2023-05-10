import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import CartItem from "./CartItem";
import EmptyCart from "./EmptyCart";
import Login from "./Login";
import { UserContext } from "../context/user";
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';

function Cart ({user, onLogin, setTattoos, count, setCount, tattoos}) {

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
                    console.log(cart.tattoos)

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

        let newTotal = 0;
        updatedTattoos.forEach(cart_tattoo => {
            newTotal += cart_tattoo.quantity * cart_tattoo.tattoo.price
        })
        setTotal(newTotal)
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

        let newTotal = 0;
        afterDeletedItems.forEach(cart_tattoo => {
        newTotal += cart_tattoo.quantity * cart_tattoo.tattoo.price
        })
        setTotal(newTotal)
    }

    const displayCartTattoos = tattoosInCart.map(cartTattoo => {
        return (
            <CartItem key={cartTattoo.id}
                cartTattoo={cartTattoo}
                handleEditTattooInCart={handleEditTattooInCart}
                handleRemoveItemInCart={handleRemoveItemInCart}
                setTattoos={setTattoos}
                count={count}
                setCount={setCount}
            />
        )
    })

    const history = useHistory();
    const handleOrderSubmit = (e) => {
        e.preventDefault()
        history.push("/ordersuccess");

        setCount(0)

        setCurrentCart(null)

        setTattoos(currentTattoos => currentTattoos.map(eachCurrentTattoo => {
                const theCurrentTattoo = {
                    ...eachCurrentTattoo,
                    is_in_cart: null
                }
                return theCurrentTattoo
        }))
    }

    return (
        <div>
            {(user === null) ?
                <div><Login onLogin={onLogin}/></div> :
                <div>{areTattoosFound ? (
                    <div>
                        <h2 style={{textAlign: 'left', marginLeft: 85, marginTop: 35}}>Your Cart</h2>
                        <Grid container spacing={5} sx={{ justifyContent: 'left', ml: 9, mt: 1, mb: 5 }}>
                                {displayCartTattoos}
                            <Grid container item xs={1} sm={1} md={1} direction="column" sx={{ justifyItems: 'right', float: 'right', justifyContent: 'right' }}>
                                <Card sx={{ width: 325, height: 200,  mt: 22, top: '0', position: 'fixed' }}>
                                    <form onSubmit={handleOrderSubmit}>
                                    <CardHeader sx={{ bgcolor: '#EEEEEE'}}
                                        title={<strong>Order Summary</strong>}
                                    >
                                    </CardHeader>
                                    <h4>Total: ${total.toFixed(2)}</h4>
                                        <Button sx={{ width: 300 }}variant="contained" type="submit">PLACE YOUR ORDER</Button>
                                    </form>
                                </Card>
                            </Grid>
                        </Grid>
                    </div> ) : 
                    (<EmptyCart />)
                    }
                </div>
            }
        </div>
    )
}

export default Cart;