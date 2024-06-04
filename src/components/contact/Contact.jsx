import React, {useEffect, useState} from 'react'
import {Navbar} from '../'
import './contact.css'
import AOS from 'aos'
import 'aos/dist/aos.css'


function Contact() {
  useEffect(()=>{
    AOS.init({duration: 1000});
  }, []);
    
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    msg: ""
  });

  const [approved, setApproved] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    localStorage.setItem(name, JSON.stringify(inputs));
    console.log(inputs);

    const inputJSON = {"key":inputs.name, "value":inputs};
    const result = await fetch("https://272.selfip.net/apps/ImOTG6acTe/collections/demo/documents/",{
      method:"POST",
      headers: {
        'Content-Type' :  "application/json"
      },
      body: JSON.stringify(inputJSON)

    })
    const resultJSON = await result.json();
    console.log(resultJSON);
  };

  const {name, email, msg} = inputs;

  const handleChange = (e) => {
    const value = e.target.value;
    const id = e.target.id;
    setInputs({
        ...inputs,
        [id]: value
    });
    console.log(inputs);
  }
  
  return (
    <div>
        <Navbar />
            <div className='contact-page'>
            <h1 data-aos="fade-up">Contact us here!</h1>
            <form data-aos="fade-up" onSubmit={handleSubmit}>
                <label>Name:
                    <input type="text" id='name' value={name} onChange={handleChange} /> 
                </label>
                
                <label>Email: 
                    <input type="text" id='email' value={email} onChange={handleChange}/>
                </label>
                <label>Question/Note/etc: </label>
                <textarea id='msg' value={msg} placeholder="Start typing here" onChange={handleChange}
                rows={4} cols={30}/>
                <input type="submit" value="Submit" className='button' />
            </form>

            <div className='socialLinks'>
                <a href="#">
                    <i className="fa-brands fa-instagram"></i>
                </a>
                <a href="#">
                    <i className="fa-regular fa-store"></i>
                </a>
            </div>

            <p className='copy'>&copy;2023 by Sopum</p>
        </div>
    </div>
  )
}

export default Contact

/*
constructor(props) {
    super(props);
    this.state = {
        value: "this is an initial value shown in input"
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
}

handleChange(event) {
    this.setState({value: event.target.value});
}

*/