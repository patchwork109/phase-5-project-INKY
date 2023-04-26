import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css'
import HomePage from "./HomePage";
import NavBar from "./NavBar";
import TattooContainer from "./TattooContainer";
import Wishlist from "./Wishlist";
import OurStory from "./OurStory";
import Cart from "./Cart";

function App() {

    const [tattoos, setTattoos] = useState();

    useEffect(() => {
        fetch('http://127.0.0.1:5555/tattoos')
        .then(response => response.json())
        .then(setTattoos)
    }, [])

    console.log(tattoos)

	return (
		<div className="App">
			<header className="App-header">
				<p>
					Phase 5 Project -- woohoo!
				</p>
				<Router>
				<NavBar/>
					<Switch>
						<Route exact path="/">
							<HomePage/>
						</Route>
						<Route exact path="/tattoos">
							<TattooContainer tattoos={tattoos}/>
						</Route>
						<Route exact path="/wishlist">
							<Wishlist/>
						</Route>
						<Route exact path="/ourstory">
							<OurStory/>
						</Route>
                        <Route exact path="/cart">
							<Cart/>
						</Route>                       
					</Switch>
				</Router>
			</header>
		</div>
	);
}

export default App;
