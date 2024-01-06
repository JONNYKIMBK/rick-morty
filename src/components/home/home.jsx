import React, { useState } from "react";
import { useQuery, gql } from "@apollo/client";
import Searchbar from "../searchbar/searchbar";
import Cards from "../cards/cards";
import ResetButton from "../resetButton/resetButton";
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

  const { loading, error, data } = useQuery(GET_CHARACTERS, {
    variables: {
      filter: { name: searchQuery },
    },
  });

  const handleSearch = (query) => {
    console.log("Realizando búsqueda con la consulta:", query);
    setSearchQuery(query);
  };

  const handleReset = () => {
    setSearchQuery("");
  };

  if (loading) return <p>Cargando...</p>;
  if (error) {
    console.error("Error:", error);

    return <p>Error: {error.message}</p>;
  }

  const characters = data.characters.results;

  return (
    <div>
      <Searchbar onSearch={handleSearch} />
      <div className="searchResult">
        {searchQuery ? (
          <span>Search results for {`"${searchQuery}"`}</span>
        ) : null}
      </div>
      <ResetButton onReset={handleReset} />

      <Cards characters={characters} />
    </div>
  );
}

export default Home;
