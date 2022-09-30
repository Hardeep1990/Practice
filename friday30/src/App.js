import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import About from './pages/About';
import Contact from './pages/Contact';
import Signup from './pages/Signup';

function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <button>
          <Link to="/"> Home Page </Link>
        </button><br />
        <button>
          <Link to="/login"> Login Page </Link>
        </button> <br />
        <button>
          <Link to="/about"> About Page </Link>
        </button> <br />
        <button>
          <Link to="/contact"> Contact Page </Link>
        </button> <br />
        <button>
          <Link to="/signup"> Signp Page </Link>
        </button>

        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/about' element={<About></About>}></Route>
          <Route path='/contact' element={<Contact></Contact>}></Route>
          <Route path='/signup' element={<Signup></Signup>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;