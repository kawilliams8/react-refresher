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
        { id: 0, name: "Snickers", count: 1 },
        { id: 1, name: "Skittles", count: 1 },
        { id: 2, name: "Candy Corn", count: 1 },
      ],
    };
  }

  addCandy = (newCandy) => {
    this.setState({ candy: [...this.state.candy, newCandy] });
  };

  deleteCandy = (id) => {
    const filteredCandy = this.state.candy.filter((candy) => candy.id != id);

    this.setState({ candy: filteredCandy });
  };

  render() {
    return (
      <>
        <Header />
        <div className="container">
          <CandyBag candy={this.state.candy} />
          <CandyTracker candy={this.state.candy} addCandy={this.addCandy} deleteCandy={this.deleteCandy}/>
        </div>
      </>
    );
  }
}
