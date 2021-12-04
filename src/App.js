import { BrowserRouter, Routes, Route} from 'react-router-dom'
import { useState } from 'react'
import './css/app.css'
import Navbar from './components/Navbar'
import Settings from './components/Settings'
import Track from './components/Track'
import Reports from './components/Reports'

function App() {
  const [viewBy, setviewBy] = useState('Day')
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/settings' element={<Settings viewBy={viewBy} setviewBy={setviewBy}/>}/>
        <Route path='/' element={<Track />} />
        <Route path='/reports' element={<Reports viewBy={viewBy}/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
