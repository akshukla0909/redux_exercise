import React, { useEffect, useState } from 'react'
import Home from './pages/Home'
import Cart from './pages/Cart'
import { Routes, Route } from 'react-router-dom'
import Navbar from './component/Navbar'

const App = () => {
  
  

 
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/cart' element={<Cart/>} />
      </Routes>
    </div>
  )
}

export default App