import React from "react";
import "./modal.css";

function Modal({ character, onClose }) {
  const { name, image, status, species, gender, type, location, origin } =
    character;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="container">
          <div className="modal-left">
            <img src={image} alt={name} />
          </div>

          <div className="modal-right">
            <p>
              <span className="title">Name: </span>
              {name}
            </p>
            <p>
              <span className="title">Status: </span>
              {status}
            </p>
            <p>
              <span className="title">Species: </span>
              {species}
            </p>
            <p>
              <span className="title">Gender: </span>

              {gender}
            </p>
            <p>
              <span className="title">Type: </span>
              {type ? type : "-"}
            </p>
            <p>
              <span className="title">Location: </span>
              {location.name}
            </p>
            <p>
              <span className="title">Origin: </span>
              {origin.name}
            </p>
          </div>
        </div>

        <span className="close" onClick={onClose}>
          X
        </span>
      </div>
    </div>
  );
}

export default Modal;
