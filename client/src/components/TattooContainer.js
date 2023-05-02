import React from "react";
import TattooCard from "./TattooCard";
import Login from "./Login";

function TattooContainer ({user, onLogin, tattoos, currentCart, setCurrentCart}) {

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
            checkIfCartIsNullAndPostNewCart = {checkIfCartIsNullAndPostNewCart}
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