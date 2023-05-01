import React from "react";
import TattooCard from "./TattooCard";
import Login from "./Login";

function TattooContainer ({user, onLogin, tattoos, currentCart, setCurrentCart}) {

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
            currentCart = {currentCart}
            setCurrentCart = {setCurrentCart}
        />
    })

    return (
        <div>
            I'm the tattoo container!
            <div>{(user === null) ? <Login onLogin={onLogin}/> : renderTattoos}</div>
        </div>
    )
}

export default TattooContainer;