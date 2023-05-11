import React from "react";
import Box from '@mui/material/Box';

function OurStory () {

    // https://inkboxdesigns.imgix.net/new_designs/cyan/cut_16317_20200402055107_cyan.jpg?auto=compress,format&con=100&gam=100&pad=20&bg=F4F5F7&fit=fill&duotone=000000,F4F5F7&w=625&fit=max&auto=compress,format&q=50&dpr=2

    return (
        <div>
            <Box sx={{ textAlign: 'left', ml: 5, fontFamily: 'Roboto Mono' }}>
            <h2 style={{ color: '#aceca0', fontFamily: 'Bebas Neue', fontSize: 50, textAlign: 'left', marginLeft: 48, marginTop: 50, marginBottom: 50}}>Our Story</h2>
            <Box sx={{ textAlign: 'left', mt: -2, mr: 65, ml: 6, fontFamily: 'Roboto Mono', color: '#f6f3d9' }}>
                <p>Hi, I'm Sam! 👋 Welcome to INKY. We provide high-quality temporary tattoos for people who want to express themselves in a fun and temporary way.</p>
                <p>At INKY, we understand that getting a permanent tattoo can be a big commitment. I was always curious about getting a tattoo 
                of a cloud, but was hesitant...did I really like clouds that much? I wanted a way to show my love for clouds without committing to something permanent. And so, INKY was born.</p>
                <p>We offer a wide variety of temporary tattoos, from trendy designs to classic looks. Our tattoos are made from high-quality materials that are safe for your skin, easy to apply, and long-ish-lasting. 
                They are perfect for those who want to experiment with different tattoo styles without the commitment or for those who want to add some fun and flair to their everyday look.</p>
                <p>We believe that everyone should have the freedom to express themselves through their personal style, and we're here to help make that possible.</p>
                <p>Thank you for choosing INKY. We hope you love our products as much as we do.</p>
            </Box>
            </Box>


            
        </div>
    )
}

export default OurStory;