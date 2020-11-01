import React, { Component } from "react";
import "./Form.scss";

class Form extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      count: 0,
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  submitCandy = (event) => {
    event.preventDefault();
    const newCandy = {
      id: Date.now(),
      ...this.state,
    };
    this.props.addCandy(newCandy);
    this.clearInputs();
  };

  clearInputs = () => {
    this.setState({ name: "", count: 0 });
  };

  render() {
    return (
      <form>
        <input
          type="text"
          placeholder="Candy Name"
          name="name"
          value={this.state.name}
          onChange={(event) => this.handleChange(event)}
        />

        <input
          type="number"
          placeholder="Count"
          name="count"
          value={this.state.count}
          onChange={(event) => this.handleChange(event)}
        />

        <button onClick={(event) => this.submitCandy(event)}>SUBMIT</button>
      </form>
    );
  }
}

export default Form;
