import React from 'react'
import './App.css'
import { Login } from './pages/Login'
import { Signup } from './pages/Signup'
import Users from './pages/Users'
import { Reservas } from './pages/Reservas'
import { Routes, Route } from 'react-router-dom'
function App () {
  return (
    <>
      <Routes>
        <Route path = "/" element = {<Login/>} />
        <Route path = "/signup" element = {<Signup/>} />
        <Route path = "/reservas" element = {<Reservas/>} />
      </Routes>
    </>
  )
}

export default App
