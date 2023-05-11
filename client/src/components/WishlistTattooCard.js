import React from "react";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import IconButton from '@mui/material/IconButton';

function WishlistTattooCard ({id, name, category, description, size, 
                                price, image, handleRemoveFavoritedTattoo, 
                                setTattoos, tattoo_id}) {

        
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
        }))
    }

    return (
        <div>
            <Grid item xs={6} sm={6} md={6} sx={{ justifyContent: 'center', m: 2 }}>
                <Card sx={{ width: 335, height: 540, textAlign: 'left'}}>
                    <CardMedia
                        className='tattooCardImage'
                        component="img"
                        height="325"
                        image={image}
                        alt={name}
                        sx={{ objectFit:'cover', width: 345}}
                    />
                    <CardContent sx={{ flexDirection: 'column', bgcolor: '#f6f3d9' }}>
                        <Box variant="h5">
                            <Typography sx={{ color: 'black', fontFamily: 'Calistoga', fontSize: 24 }}>{<strong>{name}</strong>}</Typography>
                            <IconButton sx={{ float: 'right', mt: -5 }} onClick={handleRemoveFavoriteClick}><FavoriteIcon sx={{ fontSize: 30, color: '#a80a44' }}/></IconButton>
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

export default WishlistTattooCard;