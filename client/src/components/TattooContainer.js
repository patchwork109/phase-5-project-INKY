import React, { useContext } from "react";
import TattooCard from "./TattooCard";
import Login from "./Login";
import { UserContext } from "../context/user";
import Search from "./Search";
import Filter from "./Filter";

function TattooContainer ({user, onLogin, tattoos, 
                            searchedValue, filteredCategoryValue, 
                            handleCategoryInputChange, handleSizeInputChange, 
                            checkIfCartIsNullAndPostNewCart
                        }) {

    const { currentCart } = useContext(UserContext);

    const renderTattoos = tattoos.map(tattoo => {
        return <TattooCard key={tattoo.id}
            id = {tattoo.id}
            name = {tattoo.name}
            category = {tattoo.category}
            description = {tattoo.description}
            size = {tattoo.size}
            price = {tattoo.price}
            image = {tattoo.image}
            user = {user}
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
                        <Filter 
                            filteredCategoryValue={filteredCategoryValue}
                            handleCategoryInputChange={handleCategoryInputChange}
                            handleSizeInputChange={handleSizeInputChange}
                        />
                        {renderTattoos}
                        {checkIfCartIsNullAndPostNewCart(currentCart)}
                    </div>
                }
            </div>
        </div>
    )
}

export default TattooContainer;