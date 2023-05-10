import React, { useContext } from "react";
import TattooCard from "./TattooCard";
import Login from "./Login";
import { UserContext } from "../context/user";
import Search from "./Search";
import Filter from "./Filter";
import Sort from "./Sort";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

function TattooContainer ({user, onLogin, tattoos, 
                            searchedValue, filteredCategoryValue, 
                            handleCategoryInputChange, handleSizeInputChange, 
                            checkIfCartIsNullAndPostNewCart, sortData, sortOrder, setSortOrder, setTattoos,
                            count, setCount
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
            count = {count}
            setCount = {setCount}
        />
    })

    return (
        <div>
            {(user === null) ? 
                <Login onLogin={onLogin}/> : 
                
                <div>
                    {checkIfCartIsNullAndPostNewCart(currentCart)}

                    
                    <Grid container spacing={2} >
                        <Grid container item xs={3} sm={3} md={3} direction="column" >
                            <Box><h2 style={{textAlign: 'left', marginLeft: 48, marginTop: 50, marginBottom: 50}}>All Tattoos</h2></Box>
                        </Grid>
                        <Grid container item xs={9} sm={9} md={9} direction="column" >
                            <Search searchedValue={searchedValue}/> 
                        </Grid>
                    </Grid>


                    <Grid container spacing={2}>
                        <Grid container item xs={3} sm={3} md={3} direction="column" >
                            <Box sx={{ position: 'fixed' }}>
                                <Filter 
                                    filteredCategoryValue={filteredCategoryValue}
                                    handleCategoryInputChange={handleCategoryInputChange}
                                    handleSizeInputChange={handleSizeInputChange}
                                />
                                <Sort sortData={sortData} sortOrder={sortOrder} setSortOrder={setSortOrder}/>
                            </Box>
                        </Grid>
                        <Grid container item xs={9} sm={9} md={9} direction="column" >
                            <Grid container spacing={3} sx={{ display: 'flex', justifyContent: 'center', ml: -10, mt: 2, mb: 5 }}>
                                {renderTattoos}
                            </Grid>
                        </Grid>
                    </Grid>
                </div>
            }
        </div>
    )
}

export default TattooContainer;


                    //     <Filter 
                    //         filteredCategoryValue={filteredCategoryValue}
                    //         handleCategoryInputChange={handleCategoryInputChange}
                    //         handleSizeInputChange={handleSizeInputChange}
                    //     />
                    //     <Sort sortData={sortData} sortOrder={sortOrder} setSortOrder={setSortOrder}/>
                        
                        
                    //     <Grid container spacing={3} sx={{ display: 'flex', justifyContent: 'center', mt: 5, mb: 5, border: 5 }}>
                    //         {renderTattoos}
                    //     </Grid>
                        
                    //     {checkIfCartIsNullAndPostNewCart(currentCart)}
                    // </div>