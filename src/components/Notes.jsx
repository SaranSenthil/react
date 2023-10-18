import React from 'react'

function Notes({note}) {
    <li key={note.id}>
    {
      note.content
    }
  </li>
}

export default Notes
