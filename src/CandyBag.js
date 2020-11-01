import React from 'react';
import './CandyBag.scss';

const CandyBag = ({candy}) => {
  const candyList = candy.map(item => {
    return (
      <li>
        {item.name}
      </li>
    )
  })

  return (
    <aside className="CandyBag">
      <h2>My Candy Bag</h2>
      <ul>
        {candyList}
      </ul>
    </aside>
  )
}

export default CandyBag;