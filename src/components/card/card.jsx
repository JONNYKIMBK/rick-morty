import React, { useState } from "react";

function Card({ character }) {
  const { name, image } = character;

  return (
    <div>
      <img src={image} alt={name} />
      <p>{name}</p>
    </div>
  );
}

export default Card;
