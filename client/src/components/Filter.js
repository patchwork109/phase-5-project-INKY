import React from "react";

function Filter({handleCategoryInputChange, handleSizeInputChange}) {
    

    return (
        <div>
            <h3>Choose a category:</h3>
            <label>
                <input
                    type="checkbox"
                    value="Nature"
                    onChange={handleCategoryInputChange}
                />
                Nature
            </label>
            <label>
                <input
                    type="checkbox"
                    value="Dinosaurs"
                    onChange={handleCategoryInputChange}
                />
                Dinosaurs
            </label>
            <label>
                <input
                    type="checkbox"
                    value="Animals"
                    onChange={handleCategoryInputChange}
                />
                Animals
            </label>
            <label>
                <input
                    type="checkbox"
                    value="Objects"
                    onChange={handleCategoryInputChange}
                />
                Objects
            </label>
            <h3>Choose a size:</h3>
            <label>
                <input
                    type="checkbox"
                    value="Small"
                    onChange={handleSizeInputChange}
                />
                Small
            </label>
            <label>
                <input
                    type="checkbox"
                    value="Medium"
                    onChange={handleSizeInputChange}
                />
                Medium
            </label>
            <label>
                <input
                    type="checkbox"
                    value="Large"
                    onChange={handleSizeInputChange}
                />
                Large
            </label>
        </div>
    );
}

export default Filter;