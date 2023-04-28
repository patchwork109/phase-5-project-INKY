import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./HomePage";
import NavBar from "./NavBar";
import TattooContainer from "./TattooContainer";
import Wishlist from "./Wishlist";
import OurStory from "./OurStory";
import Cart from "./Cart";
import Login from "./Login";

function App() {

    const [tattoos, setTattoos] = useState();
    const [user, setUser] = useState(null);
	// const [currentOrder, setCurrentOrder] = useState('')
	// const [showAllTattoos, setshowAllTattoos] = useState(false)

    useEffect(() => {
        fetch("/check_session")
        .then((response) => {
            if (response.ok) {
                response.json().then((user) => setUser(user));
            }
        });
    }, []);
		
    useEffect(() => {
        fetch('/tattoos')
        .then(response => response.json())
        .then(setTattoos)
    }, [])

	return (
		<div className="app">
			<header className="App-header">
				<Router>
				<NavBar onLogout={setUser}/>
					<Switch>
						<Route exact path="/">
							<HomePage/>
						</Route>
						<Route exact path="/tattoos">
							<TattooContainer user={user} onLogin={setUser} tattoos={tattoos}/>
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
