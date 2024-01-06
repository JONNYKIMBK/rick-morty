import React, { useState } from "react";
import { useQuery, gql } from "@apollo/client";
import Searchbar from "../searchbar/searchbar";
import Cards from "../cards/cards";
import ResetButton from "../resetButton/resetButton";
import Filters from "../filters/filters";
import "./home.css";

const GET_CHARACTERS = gql`
  query Characters($filter: FilterCharacter) {
    characters(filter: $filter) {
      info {
        count
        pages
      }
      results {
        id
        name
        status
        species
        gender
        type
        location {
          id
          name
        }
        origin {
          id
          name
          dimension
        }
        image
      }
    }
  }
`;
function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterOptions, setFilterOptions] = useState({
    status: "",
    species: "",
    gender: "",
  });

  const { loading, error, data } = useQuery(GET_CHARACTERS, {
    variables: {
      filter: { name: searchQuery, ...filterOptions },
    },
  });

  const handleSearch = (query) => {
    console.log("Realizando búsqueda con la consulta:", query);
    setSearchQuery(query);
  };

  const handleFilterChange = (newFilters) => {
    setFilterOptions(newFilters);
  };

  const handleReset = () => {
    setSearchQuery("");
    setFilterOptions({
      status: "",
      species: "",
      gender: "",
    });
  };

  const characters = data && data.characters ? data.characters.results : [];

  return (
    <div>
      <Searchbar onSearch={handleSearch} />
      <div className="searchResult">
        {searchQuery ? (
          <span>Search results for {`"${searchQuery}"`}</span>
        ) : null}
      </div>
      <div className="buttons">
        <Filters
          onFilterChange={handleFilterChange}
          filterOptions={filterOptions}
        />
        <ResetButton onReset={handleReset} />
      </div>

      {loading && <p>Cargando...</p>}

      {!loading && error && <p>Error: {error.message}</p>}

      {!loading && !error && data && (
        <div>
          <Cards characters={data.characters.results} />
        </div>
      )}

      {!loading && !error && data.characters.results.length == 0 && (
        <div>
          <span>No results</span>
        </div>
      )}
    </div>
  );
}

export default Home;
