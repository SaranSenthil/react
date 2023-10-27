import React, { Component } from 'react'

//State : state refers to the data. ie) used to manage and represent the internal state of the component

class App extends Component {
  constructor(props)
  {    //to call the parent class constructor
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
  decrement=()=>{
    //update the state
     this.setState({
      votes:this.state.votes-1,
    })
  }
  reset=()=>{
    //update the state
     this.setState({
      votes:0,
    })
  }
  render() {
    return (
      <div>
        <p>
          Votes: {this. state.votes}
        </p>
      
       <div className="d-flex justify-content-evenly" >
        <button onClick={this.increment}>Click to Increment</button>
        <button onClick={this.decrement}>Click to Decrement</button>
        <button onClick={this.reset}>Reset</button>
        </div>
        
      </div>
    )
  }
}

export default App