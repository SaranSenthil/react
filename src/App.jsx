import React, { Component } from 'react';

class Hello extends Component {
  render() {
    return (
      <p> Hello World</p>
    )
  }
}

 class App extends Component {
  render() {
    return (
      <Hello />
    )
  }
}

export default App