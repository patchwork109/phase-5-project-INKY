import React from "react";

function Search({searchedValue}) {

  const handleSearchInputChange = (e) => {
    searchedValue(e.target.value);
  }

  return (
    <div>
      <label htmlFor="search">Search Tattoos:</label>
      <input
        type="text"
        placeholder="Type a tattoo to search..."
        onChange={handleSearchInputChange}
      />
    </div>
  );
}

export default Search;