import './App.css';
import logo from "./logo512.png"
import Navbar from './components/Navbar';
import TextArea from './components/TextArea';
import Alert from './components/Alert';
import Footer from './components/Footer';
import React, { useState } from 'react';


function App() {
  const [mode, setMode] = useState('dark-subtle')
  const [textColor, setTextColor] = useState('white')
  const [message, setMessage] = useState(null)
  const [footerBg, setFooterBg] = useState('bg-dark-subtle')
 const [buttonColor, setButtonColor] = useState('outline-light')
  const toggleMode = () => {
    if (textColor === "white") {
      setMode("dark-subtle")
      setMessage("Light Mode has been Enabled")
      setTextColor("black")
      setFooterBg("bg-light")
      document.body.style.backgroundColor = "#ffffff"
      setButtonColor("primary")
      
    } else {
      setFooterBg("bg-dark-subtle")
      setMode("dark-subtle")
      setTextColor("white")
      document.body.style.backgroundColor = "#000000"
      setMessage("Dark Mode has been Enabled")
      setButtonColor("outline-light")
      
      
    }
  }


  return (
<>
    
      <a name="up"></a>
      <Navbar logo={logo} title=" TextEdit" mode={mode} toggleMode={toggleMode} />
      <Alert message={message}/>
      <TextArea heading="Enter your Text Below" textColor={textColor} buttonColor={buttonColor} placeholder="Type  Here" />
        <Footer logo={logo} footerBg={footerBg}/>

      </>
  );
}

export default App;
