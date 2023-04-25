import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css'
import HomePage from "./HomePage";
import NavBar from "./NavBar";
import TattooContainer from "./TattooContainer";
import Wishlist from "./Wishlist";
import OurStory from "./OurStory";

function App() {
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
							<TattooContainer/>
						</Route>
						<Route exact path="/wishlist">
							<Wishlist/>
						</Route>
						<Route exact path="/ourstory">
							<OurStory/>
						</Route>                       
					</Switch>
				</Router>
			</header>
		</div>
	);
}

export default App;
