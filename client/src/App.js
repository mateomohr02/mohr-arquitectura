
import './App.css';

import { Routes, Route } from "react-router-dom";

import Home from './views/home'
import Contacto from './views/Contacto'
import Portfolio from './views/Portfolio'

import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div>

    <Navbar></Navbar>

    <Routes>
      <Route exact path='/' element={<Home/>}></Route>
      <Route exact path='/contacto' element={<Contacto/>}></Route>
      <Route exact path='/portfolio' element={<Portfolio/>}></Route>  
    </Routes>
    </div>
  );
}

export default App;
