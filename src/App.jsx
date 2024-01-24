import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AdminSignup from './pages/auth/AdminSignup'
import Login from './pages/auth/Login'

const App = () => {
  return (
    <>


    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/signup' element={<AdminSignup/>}/>
    </Routes>
    
    
    </>
  )
}

export default App