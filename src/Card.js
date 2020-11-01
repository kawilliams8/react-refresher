import React from "react";
import "./Card.scss";

const Card = ({name, id, key}) => {
  return (
    <div className="Card">
      <h3>{name}</h3>
      <button>🗑</button>
    </div>
  );
};

export default Card;