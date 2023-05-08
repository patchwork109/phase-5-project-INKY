import React, { useEffect, useState, useContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./HomePage";
import NavBar from "./NavBar";
import TattooContainer from "./TattooContainer";
import Wishlist from "./Wishlist";
import OurStory from "./OurStory";
import Cart from "./Cart";
import OrderSuccess from "./OrderSuccess";
import CustomTattoo from "./CustomTattoo";
import { UserContext } from "../context/user";

function App() {

    const [tattoos, setTattoos] = useState([]);
    const [user, setUser] = useState(null);
	const [searchString, setSearchString] = useState("");
	const [categoryValue, setCategoryValue] = useState("");
	const [sizeValue, setSizeValue] = useState("");
	const [sortOrder, setSortOrder] = useState('asc');
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
		if (user) {
			fetch('/tattoos')
			.then(response => response.json())
			.then(setTattoos)
		}
    }, [user])

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

	const handleSizeInputChange = (e) => {
        const {value, checked} = e.target;

        if (checked) {
			setSizeValue([...sizeValue, value]);
        } else {
			setSizeValue("");
        }
    }

	const sortData = () => {
		const sortedTattoos = tattoos.sort((a, b) => {
			if (sortOrder === 'asc') {
				return a.price - b.price;
		  	} else if (sortOrder === 'desc') {
				return b.price - a.price;
			} else {
				return 0;
		  	}
		})
	  
		setTattoos(sortedTattoos);
	}

	const searchedAndFilteredTattoos = tattoos.filter(tattoo => {
		return tattoo.name.toLowerCase().includes(searchString.toLowerCase()) && 
		(categoryValue === "" || categoryValue.includes(tattoo.category)) &&
		(sizeValue === "" || sizeValue.includes(tattoo.size))
	})

	const addNewTattooToState = aNewTattooObj => {
		console.log("I'm that new tattoo:", aNewTattooObj)
		setTattoos([...tattoos, aNewTattooObj]);
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
								tattoos={searchedAndFilteredTattoos} 
								searchedValue={searchedValue}
								handleCategoryInputChange={handleCategoryInputChange}
								handleSizeInputChange={handleSizeInputChange}
								checkIfCartIsNullAndPostNewCart={checkIfCartIsNullAndPostNewCart}
								sortData={sortData}
								sortOrder={sortOrder}
								setSortOrder={setSortOrder}
								setTattoos={setTattoos}
							/>
						</Route>
						<Route exact path="/wishlist">
							<Wishlist user={user} onLogin={setUser} setTattoos={setTattoos}/>
						</Route>
						<Route exact path="/customtattoos">
							<CustomTattoo addNewTattooToState={addNewTattooToState}/>
						</Route>
						<Route exact path="/ourstory">
							<OurStory/>
						</Route>
                        <Route exact path="/cart">
							<Cart user={user} onLogin={setUser} setTattoos={setTattoos}/>
						</Route>
						<Route exact path="/ordersuccess">
							<OrderSuccess user={user}/>
						</Route>
					</Switch>
				</Router>
			</header>
		</div>
	);
}

export default App;
