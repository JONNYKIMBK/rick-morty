import React, { useState, useEffect } from "react";
import "./filters.css";

function Filters({ onFilterChange, filterOptions }) {
  const [filters, setFilters] = useState({
    status: "",
    species: "",
    gender: "",
  });

  useEffect(() => {
    setFilters(filterOptions);
  }, [filterOptions]);

  const handleFilterChange = (filterName, value) => {
    const updatedFilters = { ...filters, [filterName]: value };
    setFilters(updatedFilters);
    onFilterChange(updatedFilters);
  };

  return (
    <div className="filters-container">
      <select
        value={filters.status}
        onChange={(e) => handleFilterChange("status", e.target.value)}
        className="filter-select"
      >
        <option value="">Status...</option>
        <option value="Alive">Alive</option>
        <option value="Dead">Dead</option>
        <option value="unknown">Unknown</option>
      </select>

      <select
        value={filters.species}
        onChange={(e) => handleFilterChange("species", e.target.value)}
        className="filter-select"
      >
        <option value="">Specie...</option>
        <option value="Human">Human</option>
        <option value="Alien">Alien</option>
        <option value="Humanoid">Humanoid</option>
        <option value="Robot">Robot</option>
        <option value="Mythological Creature">Mythological Creature</option>
      </select>

      <select
        value={filters.gender}
        onChange={(e) => handleFilterChange("gender", e.target.value)}
        className="filter-select"
      >
        <option value="">Gender...</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Genderless">Genderless</option>
        <option value="unknown">Unknown</option>
      </select>
    </div>
  );
}

export default Filters;
