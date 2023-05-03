import React, { useEffect, useState, useContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./HomePage";
import NavBar from "./NavBar";
import TattooContainer from "./TattooContainer";
import Wishlist from "./Wishlist";
import OurStory from "./OurStory";
import Cart from "./Cart";
import OrderSuccess from "./OrderSuccess";
import { UserContext } from "../context/user";

function App() {

    const [tattoos, setTattoos] = useState([]);
    const [user, setUser] = useState(null);
	const [searchString, setSearchString] = useState("");
	const [categoryValue, setCategoryValue] = useState("");
	const { currentCart, setCurrentCart } = useContext(UserContext);

	console.log("I'm the current cart", currentCart)

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

	const checkIfCartIsNullAndPostNewCart = (currentCartObj) => {
        if (currentCartObj == null) {

            const new_cart= {user_id: user.id}
		
            fetch("/carts", {
                method: "POST",
                headers:{"Content-Type":"application/json"},
                body: JSON.stringify(new_cart)
            })
            .then(r => r.json())
            .then(cartObj => setCurrentCart(cartObj))
        }
    }

	const onLogout = () => {
		setUser(null)
		setCurrentCart(null)
	}

	const searchedValue = aNewStringFromSearchBar => {
		setSearchString(aNewStringFromSearchBar);
	}

	const handleCategoryInputChange = (e) => {

        const {value, checked} = e.target;

        if (checked) {
            setCategoryValue([...categoryValue, value]);
        } else {
			setCategoryValue("");
        }
    }

	const searchedAndFilteredTattoos = tattoos.filter(tattoo => {
		return tattoo.name.toLowerCase().includes(searchString.toLowerCase()) && 
		(categoryValue === "" || categoryValue.includes(tattoo.category))
	})

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
								tattoos={searchedAndFilteredTattoos} 
								searchedValue={searchedValue}
								handleCategoryInputChange={handleCategoryInputChange}
								checkIfCartIsNullAndPostNewCart={checkIfCartIsNullAndPostNewCart}
							/>
						</Route>
						<Route exact path="/wishlist">
							<Wishlist user={user}/>
						</Route>
						<Route exact path="/ourstory">
							<OurStory/>
						</Route>
                        <Route exact path="/cart">
							<Cart/>
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
