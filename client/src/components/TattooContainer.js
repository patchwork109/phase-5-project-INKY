import React, { useContext } from "react";
import TattooCard from "./TattooCard";
import Login from "./Login";
import { UserContext } from "../context/user";
import Search from "./Search";
import Filter from "./Filter";
import Sort from "./Sort";
import Grid from '@mui/material/Grid';
// import Box from '@mui/material/Box';

function TattooContainer ({user, onLogin, tattoos, 
                            searchedValue, filteredCategoryValue, 
                            handleCategoryInputChange, handleSizeInputChange, 
                            checkIfCartIsNullAndPostNewCart, sortData, sortOrder, setSortOrder, setTattoos
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
            is_favorited = {tattoo.is_favorited}
            is_in_cart = {tattoo.is_in_cart}
            setTattoos = {setTattoos}
        />
    })

    return (
        <div>
            <div>
                {(user === null) ? 
                    <Login onLogin={onLogin}/> : 
                    <div>
                        All Tattoos
                        <Search searchedValue={searchedValue}/> 
                        <Filter 
                            filteredCategoryValue={filteredCategoryValue}
                            handleCategoryInputChange={handleCategoryInputChange}
                            handleSizeInputChange={handleSizeInputChange}
                        />
                        <Sort sortData={sortData} sortOrder={sortOrder} setSortOrder={setSortOrder}/>
                        
                        
                        <Grid container spacing={3} sx={{ display: 'flex', justifyContent: 'center', mt: 5, mb: 5, border: 5 }}>
                            {renderTattoos}
                        </Grid>
                        
                        {checkIfCartIsNullAndPostNewCart(currentCart)}
                    </div>
                }
            </div>
        </div>
    )
}

export default TattooContainer;