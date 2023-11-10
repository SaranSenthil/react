import React from 'react'
import SignUp from './pages/SignUp'
import Login from './pages/Login'
import {Route,Routes} from 'react-router-dom'
function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<SignUp/>} />
      <Route path='/Login' element={<Login/>} />
    </Routes>
    </>
  )
}

export default App