import React, { useState } from 'react';



export default function TextForm(props) {
const handleUpClick = () => {
    console.log("You have clicked the button:" +text);
    let newText = text.toUpperCase();
    setText(newText);
    
}

const handleDownClick = () => {
    console.log("You have clicked the button:" +text);
    let newText = text.toLowerCase();
    setText(newText);

}

const handleClearClick = () => {
    console.log("You have clicked the button:" +text);
    let newText ='';
    setText(newText);

}

const handleCopyClick = ()=> {
    let newText = document.getElementById("myBox");
    newText.select();
    navigator.clipboard.writeText(newText.value);
    document.getSelection().removeAllRanges();
}

const handleRemoveClick = ()=> {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
}






const handleOnchange = (event) => {
    console.log("Onchange");
    setText(event.target.value);
}




    const [text, setText] = useState('');

  return (
      <>
    <div className = "container bg-light my-5 style={{backgroundColor:props.mode==='dark'? 'white':'black'}}">
    <h1 className = "text-center text-danger">Text analyzer</h1>
      <h4>{props.heading}</h4>
      <div className="mb-3">
        <textarea className="form-control" value ={text} onChange = {handleOnchange} style={{backgroundColor:props.mode==='dark'? '#13466e':'white',color:props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
      </div>
     <button className = "btn btn-primary mx-2 my-2" disabled = {text.length===0} onClick = {handleUpClick}>Convert to UpperCase</button>
     <button className = "btn btn-success mx-2 my-2"disabled = {text.length===0} onClick = {handleDownClick}>Convert to lowercase</button>
     <button className = "btn btn-danger mx-2 my-2" disabled = {text.length===0}onClick = {handleClearClick}>Clear Text</button>
     <button className = "btn btn-warning mx-2 my-2"disabled = {text.length===0} onClick = {handleCopyClick}>Copy Text</button>
     <button className = "btn btn-secondary mx-2 my-2"disabled = {text.length===0} onClick = {handleRemoveClick}>Remove Extra Spaces</button>






    </div>
    <div className="container my-3 style={{backgroundColor:props.mode==='dark'? '#fff':''}}">
        <h2>Your text Summary</h2>
        <p>{(text.split(/\s+/).filter((element)=>{return element.length!==0}).length)} words and {text.length} characters</p>
        <p>{0.0008 * text.split("").filter((element)=>{return element.length!==0}).length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the preview here"}</p>
    </div>
    </>
  );
}
