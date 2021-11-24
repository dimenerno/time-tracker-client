import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import Navbar from './components/Navbar'
import About from './components/About'
import Track from './components/Track'
import Reports from './components/Reports'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/about' element={<About/>} />
        <Route path='/track' element={<Track/>} />
        <Route path='/reports' element={<Reports/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
