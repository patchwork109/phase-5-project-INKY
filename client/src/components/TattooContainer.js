import React, { useContext } from "react";
import TattooCard from "./TattooCard";
import Login from "./Login";
import { UserContext } from "../context/user";
import Search from "./Search";
import CategoryFilter from "./CategoryFilter";

function TattooContainer ({user, onLogin, tattoos, searchedValue, filteredCategoryValue, handleCategoryInputChange}) {

    const { setCurrentCart } = useContext(UserContext);

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

    const renderTattoos = tattoos.map(tattoo => {
        return <TattooCard key={tattoo.id}
            tattoo = {tattoo}
            id = {tattoo.id}
            name = {tattoo.name}
            category = {tattoo.category}
            description = {tattoo.description}
            size = {tattoo.size}
            price = {tattoo.price}
            image = {tattoo.image}
            user = {user}
            checkIfCartIsNullAndPostNewCart = {checkIfCartIsNullAndPostNewCart}
        />
    })

    return (
        <div>
            I'm the tattoo container!
            <div>
                {(user === null) ? 
                    <Login onLogin={onLogin}/> : 
                    <div>
                        <Search searchedValue={searchedValue}/> 
                        <CategoryFilter 
                            filteredCategoryValue={filteredCategoryValue}
                            handleCategoryInputChange={handleCategoryInputChange}
                        />
                        {renderTattoos}
                    </div>
                }
            </div>
        </div>
    )
}

export default TattooContainer;