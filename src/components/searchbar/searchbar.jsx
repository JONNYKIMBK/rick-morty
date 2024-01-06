import React, { useState } from "react";
import "./searchbar.css";

function Searchbar({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();

    onSearch(query);
    setQuery("");
  };

  return (
    <form className="searchbar-container" onSubmit={handleSearch}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="search-input"
        placeholder="Search..."
      />
      <button type="submit" className="search-button">
        Search
      </button>
    </form>
  );
}

export default Searchbar;
