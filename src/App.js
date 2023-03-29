import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import "./app.css"
import TextToSpeech from "./pages/TextToSpeech.jsx"
import SpeechToText from "./pages/SpeechToText.jsx"
import Navbar from "./components/Navbar";


function App() {


  const [isLogin, setIsLogin] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")

  return (
    <div className="App">
      {!isLogin ? <LoginPage setName={setName} setEmail={setEmail} setPassword={setPassword} setIsLogin={setIsLogin} name={name} email={email} password={password} /> :
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/textToSpeech" element={<TextToSpeech />} />
            <Route path="/speechToText" element={ <SpeechToText />} />
            <Route />
          </Routes>
      </Router>
      }
    </div>
  );
}

export default App;
