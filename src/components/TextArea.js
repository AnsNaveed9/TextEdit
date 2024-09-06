
import React, {useState} from 'react'
import {CopyToClipboard} from 'react-copy-to-clipboard'


export default function TextArea(props) {
    const handleUpClick = ()=> {
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLowClick = ()=> {
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleExtraSpaces = ()=> {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }
    const handleClear = ()=> {
        let newText = '';
        setText(newText);
    }
    const handleOnChange = (event)=>{
        setText(event.target.value);
    } 

    const [text,setText] = useState("")
    const [copied,setCopied] = useState(false)
  return (
    <>
    <div className='container my-5'>
        <h1 className={`text-decoration-underline text-${props.textColor}`}>{props.heading}</h1>
       <div className="mb-3 my-4">
           <textarea className={`fs-5 form-control border bg-dark-subtle border-${props.textColor} `} value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" placeholder={props.placeholder}  rows="8"></textarea>
       </div>
       <button className={`btn btn-${props.buttonColor} my-1`} onClick={handleUpClick}>UpperCase</button>
       <button className={`btn btn-${props.buttonColor} mx-2 my-1  `} onClick={handleLowClick}>LowerCase</button>
       <button className={`btn btn-${props.buttonColor} my-1`} onClick={handleExtraSpaces}>Clear Extra Spaces</button>
       <button className={`btn btn-${props.buttonColor} mx-2 my-1 `} onClick={handleClear}>Clear Text</button>
       <CopyToClipboard text={text} onCopy={()=>{
        setCopied(true);
       }}>
       <button className={`btn btn-${props.buttonColor} my-1`} >Copy to clipboard</button>
       </CopyToClipboard>
   </div>
   <div className={`container my-4 text-${props.textColor} `}>
        <h1>Text Summary</h1>
        <p>Words: {text.split(" ").filter((element)=>{ return element.length!==0}).length} <br/> Characters: {text.length}</p>
   </div>
   </>
  )
}
