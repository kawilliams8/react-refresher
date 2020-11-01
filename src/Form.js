import React, { Component } from "react";
import "./Form.scss";

class Form extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      count: "",
    };
  }

  render() {
    return (
      <form>
        <input
          type="text"
          placeholder="Candy Name"
          name="name"
          value={this.state.name}
        />

        <input
          type="text"
          placeholder="Count"
          name="count"
          value={this.state.count}
        />

        <button>SUBMIT</button>
      </form>
    );
  }
}

export default Form;
