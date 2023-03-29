import React, { useState } from 'react'
import SpeechRecognition,{useSpeechRecognition} from "react-speech-recognition"

const SpeechToText = () => {

  // const [label, setLabel] = useState("off")

  const { transcript, listening, resetTranscript, browserSupportsSpeechRecognition} = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition)
  {
    <span>Your browser doesn't support speech recognition</span>
  }
  return (
    <section className="second">
      <div className="second-container">
        <p className="label lab">Click on the start button to turn on the microphone</p>
        <p className="label">Microphone: {listening ? "On" : "Off"}</p>
        <div className="buttons">
          <button onClick={SpeechRecognition.startListening } className="btn-1">Start</button>
          <button onClick={ SpeechRecognition.stopListening} className="btn-2">Stop</button>
          <button onClick={ resetTranscript} className="btn-3">Reset</button>
        </div>
        <div className="text-container">
        {transcript}
        </div>
      </div>
    </section>
  )
}

export default SpeechToText