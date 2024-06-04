import React, {Component, useEffect, useState, Objects} from 'react'
import './bulletin.css'
import { Link } from 'react-router-dom';


const Bulletin = () => {
  const [data, setData] = useState([{}]);

  
  useEffect(()=>{
    fetch("https://272.selfip.net/apps/ImOTG6acTe/collections/demo/documents/")
    .then(response => response.json())
    .then(data => {
      setData(data);
      console.log(data);
    })

  }, [])
  
  return(
    <div className='bulletin-container'>
      {(typeof data === 'undefined') ? 
        <p>You have seen all the notes</p>
        :
        data.map((element)=>(
          <div className='note'>
            <p>Name: {element.key}</p>
            <p>Email: {element.data.email}</p>
            <p>Note: {element.data.msg}</p>
          </div>
        ))
      }
      <Link to='/' className='return-button'>Back to Home</Link>
    </div>
  );
}

export default Bulletin