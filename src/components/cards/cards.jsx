import React, { useState } from "react";
import Card from "../card/card";
import "./cards.css";

function Cards({ characters }) {
  return (
    <div className="cardsContainer">
      {characters.map((character) => (
        <Card key={character.id} character={character} />
      ))}
    </div>
  );
}

export default Cards;
