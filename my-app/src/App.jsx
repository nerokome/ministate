import './App.css'
import Tower from './components/Tower'
import LandingPage from './components/LandingPage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



function App() {
  return (
    <>
     <Router >
      <Routes >
        <Route  path="/" element={<LandingPage />} />
        <Route path="/selector" element={<Tower />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
