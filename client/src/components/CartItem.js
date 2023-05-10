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
            if (eachCurrentTattoo.id === cartTattoo.tattoo.id ) {
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
            <Grid container item xs={11} sm={11} md={11} direction="column" sx={{ m: 2 }}>
                <Card sx={{ display: 'flex', width: 950, height: 300, textAlign: 'left' }}>
                    <CardMedia
                            component="img"
                            sx={{ width: 280 }}
                            image={cartTattoo.tattoo.image}
                            alt={cartTattoo.tattoo.name}
                        />
                    <Box sx={{ display: 'flex', flexDirection: 'column', width: 350 }}>
                        <CardContent sx={{ flex: '1 0 auto' }}>
                            {<strong>{cartTattoo.tattoo.name}</strong>}
                            <Divider sx={{ mt: .5}}/>
                            <Typography sx={{ mt: 3 }}gutterBottom>
                                {cartTattoo.tattoo.category}, {cartTattoo.tattoo.size}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {cartTattoo.tattoo.description}
                            </Typography>
                            <Box sx={{ mt: 4}}>
                                <Typography>
                                    <strong>Quantity</strong>
                                    <br />
                                    <ButtonGroup sx={{ mt: .5}} variant="contained" aria-label="outlined primary button group">
                                        <IconButton sx={{  }} onClick={handleQuantityDecrease}><RemoveIcon sx={{ fontSize: 15 }}/></IconButton>
                                        <Box sx={{ mt: .5, pl: 1, pr: 1}}>{cartTattoo.quantity}</Box>
                                        <IconButton sx={{  }} onClick={handleQuantityIncrease}><AddIcon sx={{ fontSize: 15 }}/></IconButton>
                                    </ButtonGroup>
                                </Typography>
                                <Typography>
                                    <br />
                                    <Button sx={{ ml: -.9 }} onClick={handleDeleteClick}>Remove from Cart<DeleteForeverRoundedIcon /></Button>
                                </Typography>
                            </Box>
                        </CardContent>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column', pl: 29 }}>
                        <CardContent sx={{ flex: '1 0 auto' }}>
                            <strong>${cartTattoo.quantity * cartTattoo.tattoo.price}</strong>
                        </CardContent>
                    </Box>
                </Card>
            </Grid>
        </div>
    )
}

export default CartItem;