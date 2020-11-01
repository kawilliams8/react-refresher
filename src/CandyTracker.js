import React from 'react';
import './CandyTracker.scss';
import Form from './Form';
import Cards from './Cards';

const CandyTracker = ({candy}) => {
  return (
    <section className="CandyTracker">
      <Form />
      <Cards candy={candy}/>
    </section>
  )
}

export default CandyTracker;