import React from 'react';

function Hello({ datas }) {
  return(
    <p> Welcome to {datas} </p>
  )
}

function App() {
  return (
    <div>
      <Hello datas='India'/>
    </div>
  )
}

export default App