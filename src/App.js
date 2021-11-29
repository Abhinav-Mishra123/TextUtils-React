import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
// } from "react-router-dom";


function App() {
  const [mode, setMode] = useState("light");

  const removeBodyClasses = ()=>{
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-success')
    }
    

  const toggleMode = (cls) => {
    removeBodyClasses();
    console.log(cls)
    document.body.classList.add('bg-'+cls)
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "grey";
      document.title = "textanalyzer-Darkmode";
      // setInterval(() => {
      //   document.title= "Text analyzer is amazing";
      // }, 2000);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.title = "textanalyzer-lightkmode";
      // setInterval(() => {
      //   document.title = "Install text analyzer";
      // }, 1500);
    }
  };

  
  return (
    <>
    {/* <Router> */}
      <Navbar
        title="Analyze text" aboutText="contact us"  mode={mode} toggleMode={toggleMode}/>
      <div className="container my-3">
      {/* <Switch>
          <Route path="/about">
            <About mode = {mode} />
          </Route> */}
          
          {/* <Route path="/"> */}
        <TextForm heading="Textanalyzer -Word counter ,character counter, Remove extra spaces" mode={mode} />
          {/* </Route> */}
        {/* </Switch> */}
      </div>
        {/* </Router> */}
    </>
  );
}

export default App;
