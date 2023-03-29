import React from 'react'
import {Link} from "react-router-dom"

const HomePage = () => {
  return (
    <section className="home">
      <Link class="link" to="textToSpeech" >
        <button className="one">
          Text To Speech
        </button>
      </Link>
      <Link class="link" to="speechToText">
        <button className="two">
         Speech To Text
        </button>
      </Link>
    </section>
  )
}

export default HomePage