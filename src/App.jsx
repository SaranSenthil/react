import React, { Component } from 'react'

//State : state refers to the data. ie) used to manage and represent the internal state of the component

class App extends Component {
  constructor(props)
  {
    //to call the parent class constructor
    super(props);

    //define states:
    this.state={
votes: 0,
    }
  }
  increment=()=>{
    //update the state
     this.setState({
      votes:this.state.votes+1,

    })
  }
  render() {
    return (
      <div>
        <p>
          Votes: {this. state.votes}
        </p>
        <button onClick={this.increment}>Click to Vote</button>
      </div>
    )
  }
}

export default App