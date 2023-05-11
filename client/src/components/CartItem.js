import React, { useState } from "react";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Divider from '@mui/material/Divider';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
import { ThemeProvider } from '@mui/material/styles';
import theme from "../themes/carttheme";

function CartItem ({cartTattoo, handleEditTattooInCart, handleRemoveItemInCart, setTattoos, count, setCount}) {

    const [quantity, setQuantity] = useState(cartTattoo.quantity)

    const handleQuantityIncrease = () => {
        setQuantity(quantity => (quantity + 1))

        setCount(count + 1)

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

            setCount(count - 1)

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
            if (eachCurrentTattoo.id === cartTattoo.tattoo.id ) {
                const theCurrentTattoo = {
                    ...eachCurrentTattoo,
                    is_in_cart: null
                }
                return theCurrentTattoo
            } else {
                return eachCurrentTattoo
            }
        }))

        setCount(count - quantity)
    }

    return (
        <ThemeProvider theme={theme}>
        <div>
            <Grid container item xs={11} sm={11} md={11} direction="column" sx={{ m: 2 }}>
                <Card sx={{ display: 'flex', width: 950, height: 300, textAlign: 'left' }}>
                    <CardMedia
                            className='tattooCardImage'
                            component="img"
                            sx={{ width: 280 }}
                            image={cartTattoo.tattoo.image}
                            alt={cartTattoo.tattoo.name}
                        />
                    <Box sx={{ display: 'flex', flexDirection: 'column', width: 750 }}>
                        <CardContent sx={{ flex: '1 0 auto', bgcolor: '#f6f3d9' }}>
                            <Typography sx={{ color: 'black', fontFamily: 'Calistoga', fontSize: 28 }}>{<strong>{cartTattoo.tattoo.name}</strong>}</Typography>
                            <Divider sx={{ mt: .5}}/>
                            <Typography sx={{ fontSize: 18, mt: 2 }}gutterBottom>
                                <strong>{cartTattoo.tattoo.category}, {cartTattoo.tattoo.size}</strong>
                            </Typography>
                            <Typography sx={{ color: '#1F8A70', fontSize: 14 }}>
                                {cartTattoo.tattoo.description}
                            </Typography>
                            <Box sx={{ mt: 2 }}>
                                <Typography sx={{ fontSize: 18 }}>
                                    <strong>Quantity</strong>
                                    <br />
                                    <ButtonGroup sx={{ mt: .5, border: 1, borderColor: '#1F8A70', bgcolor: '#E1EEDD' }} variant="contained" aria-label="outlined primary button group">
                                        <IconButton sx={{  }} onClick={handleQuantityDecrease}><RemoveIcon sx={{ fontSize: 15 }}/></IconButton>
                                        <Box sx={{ pl: 1, pr: 1 }}>{cartTattoo.quantity}</Box>
                                        <IconButton sx={{  }} onClick={handleQuantityIncrease}><AddIcon sx={{ fontSize: 15 }}/></IconButton>
                                    </ButtonGroup>
                                </Typography>
                                <Typography>
                                    <br />
                                    <Button sx={{ ml: -.9, mt: -5 }} onClick={handleDeleteClick}>Remove from Cart<DeleteForeverRoundedIcon sx={{ fontSize: 22 }}/></Button>
                                </Typography>
                            </Box>
                        </CardContent>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column', pl: 9, bgcolor: '#f6f3d9' }}>
                        <CardContent sx={{ flex: '1 0 auto', fontFamily: 'Roboto Mono', fontSize: 28, bgcolor: '#f6f3d9', mr: 2 }}>
                            <strong>${cartTattoo.quantity * cartTattoo.tattoo.price}</strong>
                        </CardContent>
                    </Box>
                </Card>
            </Grid>
        </div>
        </ThemeProvider>
    )
}

export default CartItem;