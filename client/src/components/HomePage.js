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

function HomePage () {


    return (
        <div>
            <h2>for now, not forever</h2>
            <ImageList sx={{ overflow: 'scroll', height: 250, border: 10, borderColor: "rgb(43, 46, 49)", mb: 5}} cols={7} rowHeight={250}>
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

            <Box sx={{ bgcolor: '#cfe8fc', height: '43vh'}}>
                <br/>
                <Typography variant="h4">Popular categories</Typography>
                <Box sx={{ bgcolor: '#cfe8fc', height: '28vh', display: 'flex', justifyContent: 'center'}}>
                    <ImageList sx={{ width: 900 }} cols={4} rowHeight={200} gap={36}>
                        <ImageListItem>
                            <img
                                src={`${planet}?w=164&h=164&fit=crop&auto=format`}
                                srcSet={`${planet}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                alt="planet"
                                loading="lazy"
                            />
                            <ImageListItemBar title="Nature"/>
                        </ImageListItem>
                        <ImageListItem>
                            <img
                                src={`${dino}?w=164&h=164&fit=crop&auto=format`}
                                srcSet={`${dino}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                alt="dino"
                                loading="lazy"
                            />
                            <ImageListItemBar title="Dinosaurs"/>
                        </ImageListItem>
                        <ImageListItem>
                            <img
                                src={`${flamingo}?w=164&h=164&fit=crop&auto=format`}
                                srcSet={`${flamingo}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                alt="flamingo"
                                loading="lazy"
                            />
                            <ImageListItemBar title="Animals"/>
                        </ImageListItem>
                        <ImageListItem>
                            <img
                                src={`${anchor}?w=164&h=164&fit=crop&auto=format`}
                                srcSet={`${anchor}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                alt="anchor"
                                loading="lazy"
                            />
                            <ImageListItemBar title="Objects"/>
                        </ImageListItem>
                    </ImageList>
                </Box>
                <Link to="/tattoos">
                    <Button variant="contained">Explore Tattoos</Button>
                </Link>
            </Box>

            <br/>
            <h3>See what people are saying</h3>
            <HomePageCarousel/>
            <br/>

            <Link to="/tattoos">
                <Button variant="contained">Explore Tattoos</Button>
            </Link>
            
            <br/>
            <br/>
            <h4>Questions? We have answers.</h4>
            <Box sx={{ display: 'flex', justifyContent: 'center'}}>
                <Stack spacing={2}>
                    <Accordion sx={{ width: 900 }}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                        <Typography>How long does an INKY tattoo last?</Typography>
                        </AccordionSummary>
                        <AccordionDetails >
                            <Typography>
                                Our tattoos last 1-2 weeks. The length is highly dependent on 
                                where you apply your tattoo and your daily activities. Our ink 
                                gradually fades away as your skin naturally regenerates.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion sx={{ width: 900 }}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                        >
                        <Typography>What tattoo sizes are available?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Our tattoos come in Small 1 x 1", Medium 3 x 3", and Large 5 x 5" sizes.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion sx={{ width: 900 }}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel3a-content"
                            id="panel3a-header"
                        >
                        <Typography>Where do you ship to?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Nowhere...👀
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </Stack>
            </Box>
            <br/>
        </div>
    )
}

export default HomePage;