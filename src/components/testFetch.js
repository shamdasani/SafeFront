import React, { Component } from 'react';
import Link from 'gatsby-link'

class testFetch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: "" //blank array
    };
  }

  componentDidMount() {
    alert("here");
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then((response) => console.log(JSON.stringify(response)));
  }

  render() {
    const {datums} = this.state;
    console.log("Rendering!");

    return (
      <div>
        <h1>
          {this.state.data}
        </h1>
        <h1>
          {datums}
        </h1>
        <h1>
          HI
        </h1>
      </div>
    )
  }
}

export default testFetch;
