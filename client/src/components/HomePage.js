import React from "react";
import { Link } from 'react-router-dom';

function HomePage () {


    return (
        <div>
            I'm the home page!
            <h2>for now, not forever</h2>
            <h4>placeholder section for images</h4>
            <h4>placeholder section for popular categories</h4>
            <Link to="/tattoos">
                <button>Explore Tattoos</button>
            </Link>
            <h4>placeholder section for featured reviews carousel</h4>
            <Link to="/tattoos">
                <button>Explore Tattoos</button>
            </Link>
            <h4>Questions? We have answers.</h4>
                <h5>How long does an INKY tattoo last?</h5>
                    <p>Our tattoos last 1-2 weeks. The length is highly dependent on where you apply your tattoo and your daily activities. Our ink gradually fades away as your skin naturally regenerates.</p>
                <h5>What tattoo sizes are available?</h5>
                    <p>Our tattoos come in Small 1 x 1", Medium 3 x 3", and Large 5 x 5" sizes.</p>
                <h5>Where do you ship to?</h5>
                    <p>Nowhere...👀</p>
        </div>
    )
}

export default HomePage;