import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
   
    <nav className="navbar-container">
    <div className="logo">
              <Link class="logolink" to="/"><h1>Deepthi Hariraman</h1></Link>
          </div>   
          <div className="links">
              <Link to="textToSpeech" className="tts">
                Text To Speech  
              </Link>
              <Link to="speechToText" className="stt">
                 Speech To Text 
              </Link>
          </div>
    </nav>
 
  )
}

export default Navbar