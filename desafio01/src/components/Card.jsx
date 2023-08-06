// Card.jsx
import React from "react";

const Card = ({ imageUrl, name, description, children }) => {
  return (
    <div className="card">
      <img src={imageUrl} alt={name} />
      <div>
        <h2>{name}</h2>
        <p>{description}</p>
        <p>perrito de raza</p> {/* Agrega este párrafo en cada tarjeta */}
        {children}
      </div>
    </div>
  );
};

export default Card;


