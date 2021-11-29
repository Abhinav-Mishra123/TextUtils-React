

import React, { useState } from 'react';

export default function Sannata(props) {

const handleUpClick = ()=> {
    // console.log("You have clicked on btton" +text);
    let newText = text.toLowerCase();
setText(newText)
}

const HandleOnChange = (event)=> {
    // console.log("Onchange");
    setText(event.target.value);
}

const [text,setText] = useState('text')

    return (
        <div>
        <h1>{props.heading}</h1>
        <div className="mb-3">
  <textarea className="myBox1" id="myBox1" placeholder = "Enter text here" value = {text} onChange={HandleOnChange} rows="8"></textarea>
</div>
<button className = "btn btn-primary" onClick = {handleUpClick}>convert LowerCase</button>            
        </div>
    )
}

