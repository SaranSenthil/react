import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

//data

const notes=[
  {
    id:1,
    content:'useage of keys',
    important: true
  },
  {
    id:2,
    content:'Handling wvwnt',
    important: false
  },
  {
    id:3,
    content:'useage  keys',
    important: false
  },
  {
    id:4,
    content:'Handling event',
    important: true
  },
  {
    id:5,
    content:'conditional formatting',
    important: false
  }
]


ReactDOM.createRoot(document.getElementById('root')).render(
    <App notes={notes} />
)
