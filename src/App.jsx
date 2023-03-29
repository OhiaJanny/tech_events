import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './layout/Navbar/Navbar'
import Footer from './layout/Footer/Footer'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Signup from './pages/Signup/Signup'
import Savesit from './pages/Savesit/Savesit'
import Bootcamp from './pages/Bootcamp/Bootcamp'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Auth from './hoc/Auth'

function App() {

  return (
    <div className="_App">
      <Router>
        <Navbar/>
        <ToastContainer />
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route exact path='/login' element={<Login/>} />
          <Route exact path='/signup' element={<Signup/>} />
          <Route exact path='/savesit' element={<Auth><Savesit/></Auth>} />
          <Route exact path='/bootcamp' element={<Auth><Bootcamp/></Auth>} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  )
}

export default App
