import React, { Component } from 'react';

class Hello extends Component {
  render() {
    const {name}=  this.props;
    return (
      <p> Hello {name} !!! </p>
    )
  }
}

 class App extends Component {
  render() {
    return (
      <Hello name='Saranya' />
    )
  }
}

export default App