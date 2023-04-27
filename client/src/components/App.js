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

    useEffect(() => {
        fetch("http://127.0.0.1:5555/check_session")
        .then((response) => {
            if (response.ok) {
                response.json().then((user) => setUser(user));
            }
        });
    }, []);
		
    useEffect(() => {
        fetch('http://127.0.0.1:5555/tattoos')
        .then(response => response.json())
        .then(setTattoos)
    }, [])

    console.log(tattoos)

	return (
		<div className="app">
			<header className="App-header">
				<Router>
				<NavBar onLogout={setUser} onLogin={setUser}/>
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
                        <Route exact path="/login">
							<Login onLogin={setUser}/>
						</Route>                        
					</Switch>
				</Router>
			</header>
		</div>
	);
}

export default App;
