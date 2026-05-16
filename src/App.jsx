import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home.jsx'
import Videos from './components/Videos.jsx'
import Navbar from './components/Navbar.jsx'
function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/videos" element={<Videos />}/>
      </Routes>
    </div>
  )
}

export default App
