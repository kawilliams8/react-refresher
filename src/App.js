import React, { Component } from "react";
import './App.css';
import Header from './Header';
import CandyBag from './CandyBag.js';
import CandyTracker from './CandyTracker.js';

export default class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <>
      <Header />
      <div className="container">
        <CandyBag />
        <CandyTracker />
      </div>
      </>
    )
  }
}
