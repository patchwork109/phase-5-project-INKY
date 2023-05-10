import React from "react";
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
// import Card from '@mui/material/Card';
// import Grid from '@mui/material/Grid';

function EmptyCart () {


    return (
        <div>
            Nothing to see here. Check out tattoos!
            <br/>
            <br/>
            <Link to="/tattoos">
                <Button variant="contained">Explore Tattoos</Button>
            </Link>


            {/* <Grid container spacing={4} >
                <Grid container item xs={9} sm={9} md={9} direction="column" >
                    <Card>Tattoo Card</Card>
                    <Card>Tattoo Card</Card>
                    <Card>Tattoo Card</Card>
                </Grid>
                <Grid container item xs={3} sm={3} md={3} direction="column" >
                    <Card>Order</Card>
                </Grid>
            </Grid> */}

      

        </div>
    )
}

export default EmptyCart;