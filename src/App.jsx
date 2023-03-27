import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './layout/Navbar/Navbar'
import Footer from './layout/Footer/Footer'
import Home from './pages/Home/Home'

function App() {

  return (
    <div className="_App">
      <Router>
        <Navbar/>
        <Routes>
          <Route exact path='/' element={<Home/>} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  )
}

export default App
