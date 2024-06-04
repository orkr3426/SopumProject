import React, {useEffect} from 'react'
import {Hero, Navbar, Footer} from "../../components";
import './home.css'
import HomeImg from "../../assets/sopum3.png"
import AOS from 'aos'
import 'aos/dist/aos.css'

function Home() {
  useEffect(()=> {
    AOS.init({duration: 1000});
  }, []);

  const top = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <div>
      <Navbar
        bgcolor = "var(--main-color)"
      />
        <button className='toTop'onClick={top} >
          <i className='fa-sharp fa-solid fa-arrow-up'></i> 
        </button>

        <div className="hero">
          <img src={HomeImg} alt=""/>
          <div className="hero-text">
            <h1 data-aos="fade-up">Welcome to <span>Sopum</span></h1>
            <p data-aos="fade-up">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Sunt quia ab ex.
            </p>
          </div>
        </div>

        <div className='stat'>
          <p data-aos='fade-up'><span>Top 5% </span>Trend Reader Stationery Store</p>
          <div className='bar'></div>
          <p data-aos='fade-up'>Delivered over <span>10 000</span> items globally</p>
          <div className='bar'></div>
          <p data-aos='fade-up'>"Loved the service, quick delivery, excellent quality!!"</p>
        </div>
        <div className=''>

        </div>
        <Footer />
    </div>
  )
}

export default Home

// npm install aos