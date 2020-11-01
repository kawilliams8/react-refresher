import React from "react";
import "./Cards.scss";
import Card from './Card.js';

const Cards = ({candy, deleteCandy}) => {

  const cardsList = candy.map((el ) => {
    return (
      <Card
        name={el.name}
        id={el.id}
        key={el.id}
        deleteCandy={deleteCandy}
      />
    );
  });

  return (
    <div className='Cards'>
      {cardsList}
    </div>
  );
};

export default Cards;
