import React, { Component } from 'react';
import Link from 'gatsby-link'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null,
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(data => this.setState({ data }));
  }

}

export default App;
