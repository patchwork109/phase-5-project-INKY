import React, { useContext } from "react";
import { UserContext } from "../context/user";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import IconButton from '@mui/material/IconButton';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
// import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';

function WishlistTattooCard ({id, name, category, description, size, price, image, handleRemoveFavoritedTattoo, setTattoos, tattoo_id, is_in_cart, setFavoritedTattoos}) {

    const { currentCart } = useContext(UserContext);
        
    const handleDeleteResponse = r => {
        if (r.ok) {
            console.log( "STATUS:", r.status)
            r.json().then(console.log)  
        } else {
            console.error("STATUS:", r.status)
            r.text().then(console.warn)
        }
    }

    const handleRemoveFavoriteClick = () => {
        fetch(`/favorites/${id}`, {
            method: "DELETE",
        })
        .then(r => handleDeleteResponse(r))

        handleRemoveFavoritedTattoo(id)

        setTattoos(currentTattoos => currentTattoos.map(eachCurrentTattoo => {
            if (eachCurrentTattoo.id === tattoo_id ) {
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
            tattoo_id: tattoo_id
        }

        const handleResponse = r => {
            if (r.ok) {
                console.log( "STATUS:", r.status)
                r.json().then(r => {
                    console.log(r)

                    setTattoos(currentTattoos => currentTattoos.map(eachCurrentTattoo => {
                        if (eachCurrentTattoo.id === tattoo_id ) {
                            const theCurrentTattoo = {
                                ...eachCurrentTattoo,
                                is_in_cart: r
                            }
                            return theCurrentTattoo
                        } else {
                            return eachCurrentTattoo
                        }
                    }))

                    setFavoritedTattoos(currentTattoos => currentTattoos.map(eachCurrentTattoo => {
                        if (eachCurrentTattoo.id === tattoo_id ) {
                            const theCurrentTattoo = {
                                ...eachCurrentTattoo,
                                is_in_cart: r
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

        fetch("/cart_tattoos", {
            method: "POST",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(newCartTattoo)
        })
        .then(r => handleResponse(r))
    }

    return (
        <div>
            <Grid item xs={6} sm={6} md={6} sx={{ justifyContent: 'center', m: 2 }}>
                <Card sx={{ width: 325, height: 540, textAlign: 'left'}}>
                    <CardMedia
                        component="img"
                        height="325"
                        image={image}
                        alt={name}
                        sx={{ objectFit:'cover', width: 345}}
                    />
                    <CardContent sx={{ flexDirection: 'column' }}>
                        <Box variant="h5">
                            {<strong>{name}</strong>} 
                                <IconButton sx={{ float: 'right', mt: -1 }} onClick={handleRemoveFavoriteClick}><FavoriteIcon sx={{ fontSize: 30, color: '#ff0000' }}/></IconButton>
                            {(!is_in_cart) ? (
                                <IconButton sx={{ float: 'right', mt: -1 }} onClick={handleAddToCartClick}><AddShoppingCartIcon sx={{ fontSize: 30 }}/></IconButton>
                                    ) : (
                                null
                                // <IconButton sx={{ float: 'right', mt: -1 }} onClick={handleRemoveFromCartClick}><RemoveShoppingCartIcon sx={{ fontSize: 30 }}/></IconButton>
                            )}
                        </Box>
                        <br />
                        <Typography gutterBottom>
                            {category}, {size}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {description}
                        </Typography>
                        <Box sx={{ mt: 4}}>
                            ${price}
                        </Box>
                    </CardContent>
                </Card>
            </Grid>
        </div>
    )
}

export default WishlistTattooCard;