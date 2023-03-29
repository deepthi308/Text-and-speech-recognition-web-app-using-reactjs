import React, { useState } from 'react'
import {useSpeechSynthesis} from "react-speech-kit"

const TextToSpeech = () => {

const [value, setvalue] = useState("")
// console.log(value)

  const { speak } = useSpeechSynthesis();

  return (
    <section className="first">
      <h1>Text to speech converter</h1>
      <div className="first-container">
        <textarea onChange={(event)=>{setvalue(event.target.value)}} resize="none" className='text' name="text" cols="100" rows="10"></textarea>
      </div>
      <button onClick={()=>{speak({text:value})}}>Convert</button>
    </section>
  )
}

export default TextToSpeech