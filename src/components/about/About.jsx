import React from 'react'
import './about.css'
import {Hero, Content, Footer, Navbar} from '../../components'
import AboutImg from "../../assets/sopum4.jpeg"

function About() {
  const top = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  
  return (
    <div>
      <Navbar/>
      <button className='toTop'onClick={top} >
        <i className='fa-sharp fa-solid fa-arrow-up'></i> 
      </button>  
      <Hero
        cName="about-hero"
        yesImg={false}
        title="About"
        textCName = "about-text"
        text="So who are we?"
      />
      <div className='about-content'>
        <img src='https://images.unsplash.com/photo-1604782206219-3b9576575203?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2797&q=80'/>

        <div className='about-content-description'>
          <h2>We are the "Trend"</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni omnis voluptatum quidem ipsa recusandae animi veritatis saepe eos, impedit vero non iusto autem? A illo architecto doloremque perspiciatis, ipsam tenetur.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores fugiat voluptates culpa tenetur ratione placeat tempore ab, consequuntur ipsa, maiores mollitia dignissimos praesentium cum eligendi? Blanditiis eveniet ipsam adipisci a.
          </p>
        </div> 
      </div>
      <Footer />
    </div>
  )
}

export default About

