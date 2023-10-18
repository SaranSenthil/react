
// // //single component
// // function App(){
// //   // console.log("Hello ")
// //   const now = new Date();
// //   //Simple addition

// //   const a=10, b=20;
// //   return (
// //     <div>
// //     <p> Hello world!! The time is {now.toString()}</p>
// //     <p>
// //       {a} plus {b} is {a+b}
// //     </p>
// //     </div>
// //   )
// // }

// // export default App

// //Multiple component
// // function Hello(){
// //   return(
// //     <p>Hello world!!!!!!!!</p>
// //   )
// // }

// // function App(){
// //   return(
// //     <div>
// //       <h1>Greetings</h1>
// //       <Hello/>
// //       <Hello/>
// //       <Hello/>
// //     </div>
// //   )
// // }
// // export default App

// // //Multiple component with passing data -Props
// // function Hello(Props){
// //   console.log(Props);
// //   return(
// //     <p>Hello {Props.username}!!!!!!!!</p>
// //   )
// // }

// // function App(){
// //   let username1='Sai';
// //   let username2='baba';
// //   return(
// //     <div>
// //       <h1>Greetings</h1>
// //       <Hello username={username1}/>
// //       <Hello username={username2}/>
// //       <Hello/>
// //     </div>
// //   )
// // }
// // export default App

// //Multiple component with passing data -Props
// import Hello from "./components/Hello";

// function App(){
//   let username1='Sai';
//   let username2='baba';
//   return(
//     <div>
//       <h1>Greetings</h1>
//       <Hello username={username1} age={10+60}/>
//       <Hello username={username2} age={25}/>
//       <Hello/>
//     </div>
//   )
// }
// export default App

import React from 'react'
import Notes from './components/Notes';

function App(props) {
  const notes =props.notes;
  //desrtucture
  //const {notes}=props;
  console.log(notes);
  return (
    <div>
      <h1>
        Notes
      </h1>
      
      <ul>
      
        <li>{notes[0].content}</li>
        <li>{notes[1].content}</li>
        <li>{notes[2].content}</li>
      </ul>
      <ul>
        {
          notes.map(note=>
            <Notes key={note.id} note={note}/>
        )}
      </ul>
    </div>
  )
}

export default App