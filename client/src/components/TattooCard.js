import React, { useContext } from "react";
import { UserContext } from "../context/user";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import IconButton from '@mui/material/IconButton';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';


function TattooCard ({id, name, category, description, size, price, image, user, is_favorited, is_in_cart, setTattoos, count, setCount}) {

    const { currentCart } = useContext(UserContext);

    const handleFavoriteClick = () => {

        const newFavoritedTattoo = {
            user_id: user.id,
            tattoo_id: id
        }

        const handleResponse = r => {
            if (r.ok) {
                console.log( "STATUS:", r.status)
                r.json().then(r => {
                    console.log(r)
                    console.log(r.id)
                    setTattoos(currentTattoos => currentTattoos.map(eachCurrentTattoo => {
                        if (eachCurrentTattoo.id === id ) {
                            const theCurrentTattoo = {
                                ...eachCurrentTattoo,
                                is_favorited: r
                            }
                            return theCurrentTattoo
                        } else {
                            return eachCurrentTattoo
                        }
                    }))
                })
            } else {
                console.error("STATUS:", r.status)
                r.text().then(console.warn)
            }
        }

        fetch("/favorites", {
            method: "POST",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(newFavoritedTattoo)
        })
        .then(r => handleResponse(r))
    }


    const handleRemoveFavoriteClick = () => {

        const handleDeleteResponse = r => {
            if (r.ok) {
                console.log( "STATUS:", r.status)
                r.json().then(r => {
                    console.log(r)
                })  
            } else {
                console.error("STATUS:", r.status)
                r.text().then(console.warn)
            }
        }

        fetch(`/favorites/${is_favorited.id}`, {
            method: "DELETE",
        })
        .then(r => handleDeleteResponse(r))

        setTattoos(currentTattoos => currentTattoos.map(eachCurrentTattoo => {
            if (eachCurrentTattoo.id === id ) {
                const theCurrentTattoo = {
                    ...eachCurrentTattoo,
                    is_favorited: null
                }
                return theCurrentTattoo
            } else {
                return eachCurrentTattoo
            }
        })
        )
    }

    const handleAddToCartClick = () => {

        const newCartTattoo = {
            quantity: 1,
            cart_id: currentCart.id,
            tattoo_id: id
        }

        const handleResponse = r => {
            if (r.ok) {
                console.log( "STATUS:", r.status)
                r.json().then(r => {
                    console.log(r)
                    setTattoos(currentTattoos => currentTattoos.map(eachCurrentTattoo => {
                        if (eachCurrentTattoo.id === id ) {
                            const theCurrentTattoo = {
                                ...eachCurrentTattoo,
                                is_in_cart: r
                            }
                            return theCurrentTattoo
                        } else {
                            return eachCurrentTattoo
                        }
                    }))
                    setCount(count + 1)
                })
            } else {
                console.error("STATUS:", r.status)
                r.text().then(console.warn)
            }
        }

        fetch("/cart_tattoos", {
            method: "POST",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(newCartTattoo)
        })
        .then(r => handleResponse(r))
    }

    const handleRemoveFromCartClick = () => {

        const handleDeleteResponse = r => {
            if (r.ok) {
                console.log( "STATUS:", r.status)
                r.json().then(r => {
                    console.log(r)
                })  
            } else {
                console.error("STATUS:", r.status)
                r.text().then(console.warn)
            }
        }

        fetch(`/cart_tattoos/${is_in_cart.id}`, {
            method: "DELETE",
        })
        .then(r => handleDeleteResponse(r))

        setTattoos(currentTattoos => currentTattoos.map(eachCurrentTattoo => {
            if (eachCurrentTattoo.id === id ) {
                const theCurrentTattoo = {
                    ...eachCurrentTattoo,
                    is_in_cart: null
                }
                return theCurrentTattoo
            } else {
                return eachCurrentTattoo
            }
        }))

        setCount(count - 1)
    }
// border: 4, borderColor: '#a80a44'
    return (
        <div>
            <Grid item xs={6} sm={4} md={3} sx={{ justifyContent: 'center', m: 2 }}>
                <Card sx={{ width: 345, height: 540, textAlign: 'left'}}>
                    <CardMedia
                        className='tattooCardImage'
                        component="img"
                        height="325"
                        image={image}
                        alt={name}
                        sx={{ objectFit:'cover', width: 345}}
                    />
                    <CardContent sx={{ flexDirection: 'column', bgcolor: '#f6f3d9'}}>
                        <Box  variant="h5">
                            <Typography sx={{ color: 'black', fontFamily: 'Calistoga', fontSize: 24 }}>{<strong>{name}</strong>}</Typography> 
                            {(!is_favorited) ? (
                                <IconButton sx={{ float: 'right', mt: -5 }} onClick={handleFavoriteClick}><FavoriteBorderIcon sx={{ fontSize: 30 }}/></IconButton>
                                    ) : (
                                <IconButton sx={{ float: 'right', mt: -5 }} onClick={handleRemoveFavoriteClick}><FavoriteIcon sx={{ fontSize: 30, color: '#a80a44' }}/></IconButton>
                            )}
                            {(!is_in_cart) ? (
                                <IconButton sx={{ float: 'right', mt: -5 }} onClick={handleAddToCartClick}><AddShoppingCartIcon sx={{ fontSize: 30 }}/></IconButton>
                                    ) : (
                                <IconButton sx={{ float: 'right', mt: -5 }} onClick={handleRemoveFromCartClick}><RemoveShoppingCartIcon sx={{ fontSize: 30 }}/></IconButton>
                            )}
                        </Box>
                        <br />
                        <Typography sx={{ color: '#1F8A70', fontFamily: 'Roboto Mono', fontSize: 17, mt: -1 }} gutterBottom>
                            {category}, {size}
                        </Typography>
                        <Typography sx={{ color: '#1F8A70', fontFamily: 'Roboto Mono', fontSize: 12 }}>
                            {description}
                        </Typography>
                        <Box sx={{ mt: 4, fontFamily: 'Roboto Mono', fontSize: 20 }}>
                            <strong>${price}</strong>
                        </Box>
                    </CardContent>
                </Card>
            </Grid>
        </div>
    )
}

export default TattooCard;