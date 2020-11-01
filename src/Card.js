import React from "react";
import "./Card.scss";

const Card = ({name, id, key, deleteCandy}) => {
  return (
    <div className="Card">
      <h3>{name}</h3>
      <button onClick={() => deleteCandy(id)}>🗑</button>
    </div>
  );
};

export default Card;