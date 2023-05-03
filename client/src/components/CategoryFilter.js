import React from "react";

function CategoryFilter({handleCategoryInputChange}) {
    

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
        </div>
    );
}

export default CategoryFilter;