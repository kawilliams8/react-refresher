import React, { Component } from "react";
import './App.css';
import Header from './Header';
import CandyBag from './CandyBag.js';
import CandyTracker from './CandyTracker.js';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      candy: [
        {id: 0, name: "Snickers"},
        {id: 1, name: "Skittles"},
        {id: 2, name: "Candy Corn"}
      ],
    };
  }

  render() {
    return (
      <>
      <Header />
      <div className="container">
        <CandyBag candy={this.state.candy}/>
        <CandyTracker candy={this.state.candy}/>
      </div>
      </>
    )
  }
}
