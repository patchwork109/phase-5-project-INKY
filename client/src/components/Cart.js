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
import { ThemeProvider } from '@mui/material/styles';
import theme from "../themes/cartcontainer";

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
        <ThemeProvider theme={theme}>
        <div>
            {(user === null) ?
                <div><Login onLogin={onLogin}/></div> :
                <div>{areTattoosFound ? (
                    <div>
                        <h2 style={{ color: '#aceca0', fontFamily: 'Bebas Neue', fontSize: 50, textAlign: 'left', marginLeft: 48, marginTop: 50, marginBottom: 50}}>Your Cart</h2>
                        <Grid container spacing={5} sx={{ justifyContent: 'left', ml: 9, mb: 5 }}>
                                {displayCartTattoos}
                            <Grid container item xs={1} sm={1} md={1} direction="column" sx={{ justifyItems: 'right', float: 'right', justifyContent: 'right' }}>
                                <Card sx={{ fontFamily: 'Roboto Mono', width: 325, height: 220,  mt: 25, top: '0', position: 'fixed', bgcolor: '#f6f3d9' }}>
                                    <form onSubmit={handleOrderSubmit}>
                                    <CardHeader sx={{ bgcolor: '#1F8A70', m: -1, color: '#E1EEDD'}}
                                        title={<strong>Order Summary</strong>}
                                    >
                                    </CardHeader>
                                    <h4 style={{ fontSize: 24}}>Total: ${total.toFixed(2)}</h4>
                                        <Button sx={{ width: 300 }}variant="contained" type="submit">Place Your Order</Button>
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
        </ThemeProvider>
    )
}

export default Cart;