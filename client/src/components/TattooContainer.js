import React from "react";
import TattooCard from "./TattooCard";

function TattooContainer ({user, tattoos}) {

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
            {renderTattoos}
        </div>
    )
}

export default TattooContainer;