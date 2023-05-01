import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./HomePage";
import NavBar from "./NavBar";
import TattooContainer from "./TattooContainer";
import Wishlist from "./Wishlist";
import OurStory from "./OurStory";
import Cart from "./Cart";
import OrderSuccess from "./OrderSuccess";

function App() {

    const [tattoos, setTattoos] = useState();
    const [user, setUser] = useState(null);
	const [currentCart, setCurrentCart] = useState(null)

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

	const onLogout = () => {
		setUser(null)
		setCurrentCart(" ")
	}

	return (
		<div className="app">
			<header className="App-header">
				<Router>
				<NavBar user={user} onLogout={onLogout}/>
					<Switch>
						<Route exact path="/">
							<HomePage/>
						</Route>
						<Route exact path="/tattoos">
							<TattooContainer 
								user={user} 
								onLogin={setUser} 
								tattoos={tattoos} 
								currentCart={currentCart}
								setCurrentCart={setCurrentCart}
							/>
						</Route>
						<Route exact path="/wishlist">
							<Wishlist/>
						</Route>
						<Route exact path="/ourstory">
							<OurStory/>
						</Route>
                        <Route exact path="/cart">
							<Cart currentCart={currentCart} setCurrentCart={setCurrentCart}/>
						</Route>
						<Route exact path="/ordersuccess">
							<OrderSuccess/>
						</Route>
					</Switch>
				</Router>
			</header>
		</div>
	);
}

export default App;
