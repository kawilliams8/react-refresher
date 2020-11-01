import React from 'react';
import './CandyTracker.scss';
import Form from './Form';
import Cards from './Cards';

const CandyTracker = ({candy, addCandy}) => {
  return (
    <section className="CandyTracker">
      <Form addCandy={addCandy} />
      {!candy.length && <h2>Trick or Treat!</h2>}
      <Cards candy={candy} />
    </section>
  );
}

export default CandyTracker;