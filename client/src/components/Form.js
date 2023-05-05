import React, { useState } from "react";

function Form({addNewTattooToState}) {

    const [tattooName, setTattooName] = useState("")
    const [tattooDescription, setTattooDescription] = useState("")
    const [tattooSize, setTattooSize] = useState("")
    const [tattooCategory, setTattooCategory] = useState("")
    // const [tattooPrice, setTattooPrice] = useState("")
    const [tattooImage, setTattooImage] = useState("")

    const handleTattooNameChange = (e) => {
        setTattooName(e.target.value);
    }

    const handleTattooDescriptionChange = (e) => {
        setTattooDescription(e.target.value);
    }

    const handleTattooSizeChange = (e) => {
        setTattooSize(e.target.value);
    }

    const handleTattooCategoryChange = (e) => {
        setTattooCategory(e.target.value);
    }

    // const handleTattooPriceChange = (e) => {
    //     setTattooPrice(e.target.value);
    // }

    const handleTattooImageChange = (e) => {
        setTattooImage(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const newTattoo = {
            name: tattooName,
            description: tattooDescription,
            size: tattooSize, 
            category: tattooCategory,
            price: Math.floor(Math.random() * 12) + 3,
            image: tattooImage
        }

        const handleNewTattooResponse = r => {
            if (r.ok) {
                console.log( "STATUS:", r.status)
                r.json().then(addNewTattooToState)
            } else {
                console.error("STATUS:", r.status)
                r.text().then(console.warn)
            }
        }
    
        fetch("/tattoos", {
            method: "POST",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(newTattoo)
        })
        .then(r => handleNewTattooResponse(r))

        // const newFavorite = {
        //     is_favorited: true,
        //     // need to figure out how to update the tattoo_id field
        //     // user_id: user.id,
        //     // tattoo_id: id
        // }

        // const handleNewFavoriteResponse = r => {
        //     if (r.ok) {
        //         console.log( "STATUS:", r.status)
        //         // update to the new favorite function
        //         r.json().then(addNewTattooToState)
        //     } else {
        //         console.error("STATUS:", r.status)
        //         r.text().then(console.warn)
        //     }
        // }
    
        // fetch("/favorites", {
        //     method: "POST",
        //     headers: {"Content-Type":"application/json"},
        //     body: JSON.stringify(newFavorite)
        // })
        // .then(r => handleNewFavoriteResponse(r))
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h3>Add a tattoo!</h3>
                <label>Name:</label>
                <input
                    type="text"
                    name="name"
                    placeholder="What should we call this tattoo?"
                    onChange={handleTattooNameChange}
                />
                <br />
                <label>Description:</label>
                <input
                    type="text"
                    name="description"
                    placeholder="Describe the tattoo."
                    onChange={handleTattooDescriptionChange}
                />
                <br />
                <label>Choose a size:</label>
                <select name="size" onChange={handleTattooSizeChange}>
                    <option value="Small">Small</option>
                    <option value="Medium">Medium</option>
                    <option value="Large">Large</option>
                </select>
                <br />
                <label>Choose a category:</label>
                <select name="category" onChange={handleTattooCategoryChange}>
                    <option value="Nature">Nature</option>
                    <option value="Animals">Animals</option>
                    <option value="Dinosaurs">Dinosaurs</option>
                    <option value="Objects">Objects</option>
                    <option value="Other">Other</option>
                </select>
                <br />
                {/* <label>Price:</label>
                <input
                    type="text"
                    name="price"
                    placeholder="Enter a price."
                    onChange={handleTattooPriceChange}
                />
                <br /> */}
                <label>Image:</label>
                <input
                    type="text"
                    name="image"
                    placeholder="Enter an image URL."
                    onChange={handleTattooImageChange}
                />
                <br />
                <br />
                <input
                    type="submit"
                    name="submit"
                    value="Submit a New Tattoo"
                    className="submit"
                />
            </form>
        </div>
    );
}

export default Form;