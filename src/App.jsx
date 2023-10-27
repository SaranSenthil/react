import React, { Component } from 'react';

class App extends Component {
  //componentDidMount  called after the comp has rendered to the DOM.
componentDidMount(){
  console.log('componet mounted')
}
// called on props / state changes
componentDidUpdate(){
  console.log('componet state updated')
}

componentWillUnmount(){
  //invoked just before the comp is removed from DOM
  //releasing memory and cancelling timers
}
  render() {
    return (
      <div>Hi Hello!!!!!!!!!!!!</div>
    )
  }
}

export default App