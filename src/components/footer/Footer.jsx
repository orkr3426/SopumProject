import React, { useEffect, useRef } from 'react'
import './footer.css'
import AOS from 'aos'
import 'aos/dist/aos.css'

function Footer() {
  const inputRef = useRef(null);

  useEffect(()=>{
    AOS.init({duration: 1000})
  }, []);

  const onSubmit = () => {
    console.log(inputRef.current.value);
    inputRef.current.value = "";
  }
  
  return (
    <div className='footer'>
        <div className='footer-content' data-aos="fade-up">
            <h1>Want to hear about our latest update?!</h1>
            <h3>Enter your email and subscribe!</h3>
            <input type={'email'} placeholder="doe2@example.com" ref={inputRef}/>
            <button value="Subscribe" className='button' onClick={onSubmit}>Submit</button>
        </div>

        <p className='copy'>&copy;2023 by Sopum</p>
    </div>
  )
}

export default Footer