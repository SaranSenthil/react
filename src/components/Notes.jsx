import React from 'react'

function Notes({note}) {
//    return( <li >
//     {note.important ? note.content + ' ★ ' : note.content } 
//   </li>)
return( <li >
    { note.content} { note.important && '★' } 
  </li>)
}

export default Notes
