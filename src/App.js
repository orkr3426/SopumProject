import './App.css';
import {Footer, About, Navbar, Hero, Products, Contact, Login, Home, ScrollAnim, Bulletin} from "./components"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/bulletin' element={<Bulletin/>} />
      </Routes>
    </div>
      
  );
}

export default App;
