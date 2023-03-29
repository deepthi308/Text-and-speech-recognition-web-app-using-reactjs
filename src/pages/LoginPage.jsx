import React from 'react'
import IMG from "../images/login2.avif"
import User1 from "../images/user1.png"
import User2 from "../images/user2.png"
import User3 from "../images/user3.png"
import User4 from "../images/user4.png"
import User5 from "../images/user5.png"
import User6 from "../images/user6.png"

const LoginPage = ({ setName, setEmail, setPassword, setIsLogin , name, email, password}) => {
  
  const handleSubmit = (event) => {
  
  if (name === "" && email == "" && password == "")
  {
    alert("Please fill the form")
    setIsLogin(false)
  }
  else
  {
    setIsLogin(true)
  }
}

  return (
    <section className="login-box-container">
      <h1 className="title">Deepthi's Text & Speech Recognizer</h1>
      <div className="login-box">
        
        <div className="avatar">
          <img src={User2} alt="" />
        </div>
        <form className="bottom">
          <div className="form-group">
            <label htmlFor="name">Enter your name</label>
            <input type="text" id="name" onChange={(event)=>{setName(event.target.value)}}/>
          </div>
          <div className="form-group">
            <label htmlFor="email">Enter your email</label>
            <input type="email" id="email" onChange={(event)=>{setEmail(event.target.value)}}/>
          </div>
          <div className="form-group">
            <label htmlFor="password">Enter your password</label>
            <input type="password" id="password" onChange={(event)=>{setPassword(event.target.value)}}/>
          </div>
          <div className="form-group">
          </div>

          <button className="submit" onClick={(event)=>handleSubmit()}type="submit">Submit</button>
        </form>
       
      </div>
    </section>
  )
}

export default LoginPage