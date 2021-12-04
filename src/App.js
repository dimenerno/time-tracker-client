import { BrowserRouter, Routes, Route} from 'react-router-dom'
import './css/app.css'
import Navbar from './components/Navbar'
import Settings from './components/Settings'
import Track from './components/Track'
import Reports from './components/Reports'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/settings' element={<Settings />}/>
        <Route path='/' element={<Track />} />
        <Route path='/reports' element={<Reports />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
