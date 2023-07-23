import React, {useState} from 'react'



export default function TextFile(props) {
  
 
  
  const handleUpClick = () => {
    console.log("Upper case was clicked")
    let newText= text.toLowerCase();
    setText(newText);
  }
  const handleOnChange = (event) => {
    console.log("On Change")
    setText(event.target.value)
  }
  const handleOnClick = () => {
    
    setText("")
  }
  const [text, setText]= useState("Enter text over here");
  return (
    <div style={{backgroundColor :props.bg==='dark'? 'grey' : 'white', color: props.bg==='dark'? 'white':'black'}}>
      <h1>{props.heading}</h1>
      <div className="mt -3"  >
        <textarea  className="form-control" id="MyText" rows="8" value={text} onClick={handleOnClick} onChange={handleOnChange} style={{backgroundColor :props.bg==='dark'? 'grey' : 'white', color: props.bg==='dark'? 'white':'black'}} ></textarea>
        <button type="button" className="btn btn-primary mt-3 mb-2" onClick={handleUpClick}>Convert To Lower Case</button> 
         
      </div>  
    </div>
  )
}


