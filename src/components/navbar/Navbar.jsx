import React, {useState} from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'

function Navbar() {
  const [click, setClick] = useState(false);
  // state = {clicked: false};

  const handleClick = () => {
    if (click) {
      setClick(false);
      document.body.style.overflow = "auto"
    } else { 
      setClick(true);
      document.body.style.overflow = "hidden"
    }
  }

  const [bgcolor, setBgColor] = useState("");
  const changeColor = () => {
    if (window.scrollY >= 500) {
      setBgColor("#054A4A");
    } else {
      setBgColor("transparent");
    }
  }

  window.addEventListener("scroll", changeColor);

  const refresh = () => {
    setClick(false);
    window.scrollTo(0,0);
  }

  return (
    <div className='navbar-container' style={{backgroundColor: bgcolor}}>
        <div className='navbar-logo'>
          <Link to='/' className='navbar-logo-title' onClick={refresh}>
            <i class="fa-solid fa-brush"></i> SoPum
          </Link>
        </div>

        <ul className={click ? 'navbar-links active' : 'navbar-links'} style={click ? {backgroundColor:"#054A4A"} : {backgroundColor:"transparent"}}>
          <Link to='/about' className='navbar-link' onClick={refresh}>ABOUT</Link>
          <Link to='/products' className='navbar-link' onClick={refresh}>PRODUCTS</Link>
          <Link to='/contact' className='navbar-link' onClick={refresh}>CONTACT</Link>
          <Link to='/login' className='navbar-link' onClick={refresh}>LOGIN</Link>
          {/* <Button>Sign Up</Button> */}
        </ul>  

        <button className='navbar-button' onClick={handleClick}>
          <i className={!click ? "fa-solid fa-crop-simple" : "fa-solid fa-crop"}></i>
        </button>      
    </div>
  )
  
  
}

export default Navbar
