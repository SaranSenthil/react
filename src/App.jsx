

function App(){
  // console.log("Hello ")
  const now = new Date();
  //Simple addition

  const a=10, b=20;
  return (
    <div>
    <p> Hello world!! The time is {now.toString()}</p>
    <p>
      {a} plus {b} is {a+b}
    </p>
    </div>
  )
}

export default App
