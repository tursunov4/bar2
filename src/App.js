import React from 'react'
import './assets/main.css'
import { Route, Routes } from 'react-router-dom'
import Mian from './pages/Mian'
const App = () => {
  return (
    <>
    <Routes>
      <Route element={<Mian/>} path='/'/>
    </Routes>
    </>
  )
}

export default App