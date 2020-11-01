import React from 'react';
import './CandyTracker.scss';
import Form from './Form';
import Cards from './Cards';

const CandyTracker = () => {
  return (
    <section className="CandyTracker">
      <Form />
      <Cards />
    </section>
  )
}

export default CandyTracker;