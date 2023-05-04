import React from "react";

function Sort({sortData, sortOrder, setSortOrder}) {

    const toggleSortOrder = () => {
    
        sortData()

        if (sortOrder === 'asc') {
            setSortOrder('desc');
        } else {
            setSortOrder('asc');
        }

    console.log("What is the sort order?", sortOrder);
    console.log("What does this equal?:", (sortOrder === 'asc'));
    }

    return (
        <div>
            <h3>Sort Tattoos by Price:</h3>
            {(sortOrder === 'asc') ? 
                <button onClick={toggleSortOrder}>Sort by Low to High</button> : 
                <button onClick={toggleSortOrder}>Sort by High to Low</button>}
        </div>
    );
}

export default Sort;