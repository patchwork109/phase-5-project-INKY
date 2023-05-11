import React from "react";
import HomePageCarousel from "./Carousel";
import { Link } from 'react-router-dom';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import Stack from '@mui/system/Stack';
import whale from '../images/whale.png';
import lemon from '../images/lemon.png';
import dragonfly from '../images/dragonfly.png';
import palmtree from '../images/palmtree.png';
import turtle from '../images/turtle.png';
import earth from '../images/earth.png';
import pizza from '../images/pizza.png';
import dino from '../images/dino_homepage.png';
import anchor from '../images/anchor_homepage.png';
import flamingo from '../images/flamingo_homepage.png';
import planet from '../images/planet_homepage.png';
import { ThemeProvider } from '@mui/material/styles';
import theme from "../themes/theme";


function HomePage () {


    return (
        <ThemeProvider theme={theme}>
        <div>
            <h2 style={{ fontFamily: 'Calistoga', fontStyle: 'italic', fontSize: 38, color: '#f6f3d9'}}>for now, not forever</h2>
            <ImageList className="homePageImages" sx={{ overflow: 'scroll', height: 250, mb: 5}} cols={7} rowHeight={250}>
                <ImageListItem className="homePageWhale">
                    <img
                        src={`${whale}?w=164&h=164&fit=crop&auto=format`}
                        srcSet={`${whale}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                        alt="whale"
                        loading="lazy"
                    />
                </ImageListItem>
                <ImageListItem className="homePageLemon">
                    <img
                        src={`${lemon}?w=164&h=164&fit=crop&auto=format`}
                        srcSet={`${lemon}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                        alt="lemon"
                        loading="lazy"
                    />
                </ImageListItem>
                <ImageListItem className="homePageDragonfly">
                    <img
                        src={`${dragonfly}?w=164&h=164&fit=crop&auto=format`}
                        srcSet={`${dragonfly}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                        alt="dragonfly"
                        loading="lazy"
                    />
                </ImageListItem>
                <ImageListItem className="homePagePalm">
                    <img
                        src={`${palmtree}?w=164&h=164&fit=crop&auto=format`}
                        srcSet={`${palmtree}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                        alt="palmtree"
                        loading="lazy"
                    />
                </ImageListItem>
                <ImageListItem className="homePageTurtle">
                    <img
                        src={`${turtle}?w=164&h=164&fit=crop&auto=format`}
                        srcSet={`${turtle}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                        alt="turtle"
                        loading="lazy"
                    />
                </ImageListItem>
                <ImageListItem className="homePageEarth">
                    <img
                        src={`${earth}?w=164&h=164&fit=crop&auto=format`}
                        srcSet={`${earth}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                        alt="earth"
                        loading="lazy"
                    />
                </ImageListItem>
                <ImageListItem className="homePagePizza">
                    <img
                        src={`${pizza}?w=164&h=164&fit=crop&auto=format`}
                        srcSet={`${pizza}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                        alt="pizza"
                        loading="lazy"
                    />
                </ImageListItem>
             </ImageList>

            <Box sx={{ bgcolor: '#1F8A70', height: '53vh'}}>
                <br/>
                <h2 style={{ fontFamily: 'Bebas Neue', fontSize: 50, marginTop: 3, marginBottom: 3, color: '#f6f3d9' }}>Popular categories</h2>
                <Box sx={{ bgcolor: '#1F8A70', height: '30vh', display: 'flex', justifyContent: 'center' }}>
                    <ImageList sx={{ width: 900 }} cols={4} rowHeight={200} gap={36}>
                        <ImageListItem sx={{color: '#00425A'}}> 
                            <img style={{ borderRadius: 15 }} className="homePageImages"
                                src={`${planet}?w=164&h=164&fit=crop&auto=format`}
                                srcSet={`${planet}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                alt="planet"
                                loading="lazy"
                            />
                            <ImageListItemBar id="hpNature" sx={{ bgcolor: '#aceca0', textAlign: 'right', color: '#00425A'}} title="Nature"/>
                        </ImageListItem>
                        <ImageListItem>
                            <img style={{ borderRadius: 15 }} className="homePageImages"
                                src={`${dino}?w=164&h=164&fit=crop&auto=format`}
                                srcSet={`${dino}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                alt="dino"
                                loading="lazy"
                            />
                            <ImageListItemBar id="hpDinosaurs" sx={{ bgcolor: '#aceca0', textAlign: 'right', color: '#00425A'}} title="Dinosaurs"/>
                        </ImageListItem>
                        <ImageListItem>
                            <img style={{ borderRadius: 15 }} className="homePageImages"
                                src={`${flamingo}?w=164&h=164&fit=crop&auto=format`}
                                srcSet={`${flamingo}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                alt="flamingo"
                                loading="lazy"
                            />
                            <ImageListItemBar id="hpAnimals" sx={{ bgcolor: '#aceca0', textAlign: 'right', color: '#00425A'}} title="Animals"/>
                        </ImageListItem>
                        <ImageListItem>
                            <img style={{ borderRadius: 15 }} className="homePageImages"
                                src={`${anchor}?w=164&h=164&fit=crop&auto=format`}
                                srcSet={`${anchor}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                alt="anchor"
                                loading="lazy"
                            />
                            <ImageListItemBar id="hpObjects" sx={{ bgcolor: '#aceca0', textAlign: 'right', color: '#00425A'}} title="Objects"/>
                        </ImageListItem>
                    </ImageList>
                </Box>
                <Link to="/tattoos">
                    <Button sx={{ mt: 1 }} variant="contained">Explore Tattoos</Button>
                </Link>
            </Box>

            <br/>
            <h2 style={{ fontFamily: 'Bebas Neue', fontSize: 50, marginTop: 30, marginBottom: 3, color: '#f6f3d9' }}>See what people are saying</h2>
            <HomePageCarousel/>
            <br/>

            <Link to="/tattoos">
                <Button variant="contained">Explore Tattoos</Button>
            </Link>
            
            <br/>
            <br/>
            <h4 style={{ fontFamily: 'Bebas Neue', fontSize: 50, marginTop: 50, marginBottom: 20, color: '#BFDB38' }}>Questions? We have answers.</h4>
            <Box sx={{ display: 'flex', justifyContent: 'center', mb: 5}}>
                <Stack spacing={2}>
                    <Accordion sx={{ width: 900, bgcolor: '#E1EEDD' }}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                        <Typography>How long does an INKY tattoo last?</Typography>
                        </AccordionSummary>
                        <AccordionDetails >
                            <Typography sx={{ color: '#a80a44', fontSize: 18, fontFamily: 'Roboto Mono', textAlign: 'left'}}>
                                Our tattoos last 1-2 weeks. The length is highly dependent on 
                                where you apply your tattoo and your daily activities. Our ink 
                                gradually fades away as your skin naturally regenerates.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion sx={{ width: 900, bgcolor: '#E1EEDD' }}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                        >
                        <Typography>What tattoo sizes are available?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography sx={{ color: '#a80a44', fontSize: 18, fontFamily: 'Roboto Mono', textAlign: 'left'}}>
                                Our tattoos come in Small 1 x 1", Medium 3 x 3", and Large 5 x 5" sizes.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion sx={{ width: 900, bgcolor: '#E1EEDD' }}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel3a-content"
                            id="panel3a-header"
                        >
                        <Typography sx={{  }}>Where do you ship to?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography sx={{ color: '#a80a44', fontSize: 18, fontFamily: 'Roboto Mono', textAlign: 'left'}}>
                                Nowhere...👀
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </Stack>
            </Box>
            <br/>
        </div>
        </ThemeProvider>
    )
}

export default HomePage;