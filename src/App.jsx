import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Videos from './components/Videos'
function App() {
  return (
    <>
    <Route path="/" element={<Home />}/>
    <Route path="/videos" element={<Videos />}/>
    </>
  )
}

export default App
