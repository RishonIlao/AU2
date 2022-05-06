import './App.css';
//import Navbar from './components/Navbar';
import Card from './components/Card';
import HeroBanner from './components/HeroBanner'
import {Routes, Route, Link} from 'react-router-dom'

import Home from './Pages/Home';
import About from './Pages/About';
import Profile from './Pages/Profile';
import Login from './Pages/Auth/Login';

function App() {
  return (
    <div className="App">
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/profile'>Profile</Link>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} /> 
        <Route path='/about' element={<About />} /> 
        <Route path='/profile' element={<Profile />} />
        <Route path='/auth/login' element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
