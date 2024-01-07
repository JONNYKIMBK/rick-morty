import React, { useState } from "react";
import Modal from "../modal/modal";
import "./card.css";

function Card({ character }) {
  const { name, image } = character;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <div onClick={openModal} className="card">
        <img src={image} alt={name} />
        <p>{name}</p>
      </div>

      {isModalOpen && <Modal character={character} onClose={closeModal} />}
    </div>
  );
}

export default Card;
