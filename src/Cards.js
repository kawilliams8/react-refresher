import React from "react";
import "./Cards.scss";
import Card from './Card.js';

const Cards = ({candy}) => {
  return (
    <div className="Cards">
      <Card />
      <Card />
      <Card />
    </div>
  );
};

export default Cards;
