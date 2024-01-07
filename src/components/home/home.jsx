import React, { useState } from "react";
import { useQuery, gql } from "@apollo/client";
import Searchbar from "../searchbar/searchbar";
import Cards from "../cards/cards";
import ResetButton from "../resetButton/resetButton";
import Filters from "../filters/filters";
import Pagination from "../pagination/pagination";
import SocialButtons from "../socialButtons/socialButtons";
import "./home.css";

const GET_CHARACTERS = gql`
  query Characters($filter: FilterCharacter, $page: Int) {
    characters(filter: $filter, page: $page) {
      info {
        count
        pages
        next
        prev
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

  const [currentPage, setCurrentPage] = useState(1);

  const { loading, error, data } = useQuery(GET_CHARACTERS, {
    variables: {
      filter: { name: searchQuery, ...filterOptions },
      page: currentPage,
    },
  });

  const handleSearch = (query) => {
    setSearchQuery(query);
    setCurrentPage(1);
  };

  const handleFilterChange = (newFilters) => {
    setFilterOptions(newFilters);
    setCurrentPage(1);
  };

  const handleReset = () => {
    setSearchQuery("");
    setFilterOptions({
      status: "",
      species: "",
      gender: "",
    });

    setCurrentPage(1);
  };

  const characters = data && data.characters ? data.characters.results : [];
  const totalPages = data && data.characters ? data.characters.info.pages : 0;

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div>
      <SocialButtons />

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

      {loading && (
        <p className="loading-message">
          <span className="spinner"></span>
          Loading...
        </p>
      )}

      {!loading && error && <p>Error: {error.message}</p>}

      {!loading && !error && data && (
        <div>
          <Cards characters={data.characters.results} />
        </div>
      )}

      {!loading && !error && data.characters.results.length == 0 && (
        <div>
          <span className="no-results-message">No results</span>
        </div>
      )}
      <Pagination
        totalPages={totalPages}
        onPageChange={handlePageChange}
        actualPage={currentPage}
      />
    </div>
  );
}

export default Home;
