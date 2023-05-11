import React from "react";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import fluffy_cloud from '../images/fluffy_cloud.png';

function OurStory () {

    return (
        <div>
            <Grid container spacing={2}>
                <Grid item xs={8}>
                    <Box sx={{ textAlign: 'left', ml: 5, fontFamily: 'Roboto Mono' }}>
                        <h2 style={{ color: '#aceca0', fontFamily: 'Bebas Neue', fontSize: 50, textAlign: 'left', marginLeft: 48, marginTop: 50, marginBottom: 50}}>Our Story</h2>
                        <Box sx={{ textAlign: 'left', fontFamily: 'Roboto Mono', fontSize: 19, color: '#f6f3d9', ml: 6, mr: 7 }}>
                            <p>Hi, I'm Sam! 👋 Welcome to INKY. We provide high-quality temporary tattoos for people who want to express themselves in a fun and temporary way.</p>
                            <p>At INKY, we understand that getting a permanent tattoo can be a big commitment. I was always curious about getting a tattoo 
                            of a cloud, but was hesitant...did I really like clouds that much? I wanted a way to show my love for clouds without committing to something permanent. And so, INKY was born.</p>
                            <p>We offer a wide variety of temporary tattoos, from trendy designs to classic looks. Our tattoos are made from high-quality materials that are safe for your skin, easy to apply, and long-ish-lasting. 
                            They are perfect for those who want to experiment with different tattoo styles without the commitment or for those who want to add some fun and flair to their everyday look.</p>
                            <p>We believe that everyone should have the freedom to express themselves through their personal style, and we're here to help make that possible.</p>
                            <p>Thank you for choosing INKY. We hope you love our products as much as we do.</p>
                            <p style={{ color: '#aceca0', fontFamily: 'Calligraffitti', fontSize: 50, textAlign: 'right', marginTop: -2 }}>- Sam Genevay</p>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={4}>
                    <Box sx={{ borderRadius: 10 }}>
                        <Box sx={{ mt: 20, ml: 0, pr: 4 }}>
                            <img style={{ borderRadius: 15, width: "80%" }} 
                                className="homePageImages"
                                src={fluffy_cloud}
                                alt="fluffy_cloud"
                                loading="lazy"
                            />
                        </Box>
                    </Box>
                </Grid>
            </Grid> 
        </div>
    )
}

export default OurStory;