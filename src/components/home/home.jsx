import React, { useState } from "react";
import Searchbar from "../searchbar/searchbar";

function Home() {
  const handleSearch = (query) => {
    console.log("Realizando búsqueda con la consulta:", query);
  };

  return (
    <div>
      <Searchbar onSearch={handleSearch} />
    </div>
  );
}

export default Home;
