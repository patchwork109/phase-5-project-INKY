import React, { useContext } from "react";
import { UserContext } from "../context/user";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';


function TattooCard ({id, name, category, description, size, price, image, user, is_favorited, is_in_cart, setTattoos}) {

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
        })
        )
    }

    return (
        <div>
                <Grid item xs={6} sm={4} md={3} sx={{ justifyContent: 'center', m: 2 }}>
                    <Card sx={{ width: 345, height: 550}}>
                            <CardMedia
                                component="img"
                                height="325"
                                image={image}
                                alt={name}
                                sx={{ objectFit:'cover', width: 345}}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5">
                                    {name}
                                </Typography>
                                <Typography gutterBottom variant="h6">
                                    {category}, {size}, ${price}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {description}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <div>
                                    { (!is_favorited) ? (
                                        <Button onClick={handleFavoriteClick}>Add to Wishlist!</Button>
                                            ) : (
                                        <Button onClick={handleRemoveFavoriteClick}>Remove from Wishlist</Button>
                                    )}
                                </div>
                                <div>
                                    { (!is_in_cart) ? (
                                        <Button onClick={handleAddToCartClick}>Add to Cart!</Button>
                                            ) : (
                                        <Button onClick={handleRemoveFromCartClick}>Remove from Cart</Button>
                                    )}
                                </div>
                            </CardActions>
                    </Card>
                </Grid>
        </div>
        

// {/* <Grid container spacing={1} sx={{ border: 5 }}>
//         <Grid item md={4}>
//           <Paper>
//           <h3>{name}</h3>
//                 Category: {category}
//                 <br/>
//                 Description: {description}
//                 <br/>
//                 Size: {size}
//                 <br/>
//                 Price: ${price}
//                 <br/>
//                 <img src={image} alt={name} />
//                 <br/>
//                 <div>
//                     { (!is_favorited) ? (
//                         <button onClick={handleFavoriteClick}>Add to Wishlist!</button>
//                     ) : (
//                         <button onClick={handleRemoveFavoriteClick}>Remove from Wishlist</button>
//                     )}
//                 </div>
//                 <div>
//                     { (!is_in_cart) ? (
//                         <button onClick={handleAddToCartClick}>Add to Cart!</button>
//                     ) : (
//                         <button onClick={handleRemoveFromCartClick}>Remove from Cart</button>
//                     )}
//                 </div>
//           </Paper>
//         </Grid>
//     </Grid> */}


            // // {/* <Box sx={{ border: 5 }}> */}
            //     {/* <Grid container spacing={2}>
            //         <Grid xs={4}>
            // <Card sx={{ maxWidth: 300 }} className="tattooCard">
            //     <h3>{name}</h3>
            //     Category: {category}
            //     <br/>
            //     Description: {description}
            //     <br/>
            //     Size: {size}
            //     <br/>
            //     Price: ${price}
            //     <br/>
            //     <img src={image} alt={name} />
            //     <br/>
            //     <div>
            //         { (!is_favorited) ? (
            //             <button onClick={handleFavoriteClick}>Add to Wishlist!</button>
            //         ) : (
            //             <button onClick={handleRemoveFavoriteClick}>Remove from Wishlist</button>
            //         )}
            //     </div>
            //     <div>
            //         { (!is_in_cart) ? (
            //             <button onClick={handleAddToCartClick}>Add to Cart!</button>
            //         ) : (
            //             <button onClick={handleRemoveFromCartClick}>Remove from Cart</button>
            //         )}
            //     </div>
            // </Card>
            // </Grid>
            //     </Grid> */}
            // {/* </Box> */}
        
    )
}

export default TattooCard;