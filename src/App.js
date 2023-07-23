import { useState } from 'react';
import './App.css';
import NavBar from './Components/NavBar';
import About from './Components/About';
import React from "react";
import TextFile from './Components/TextFile';

import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

function App() {
   const [mode, setMode]= useState('light');
   const toggleMode = ()=> {
      if (mode === 'light')
       {setMode('dark')
       document.body.style.backgroundColor= 'grey'
      }
      else 
      {
         setMode('light')
         document.body.style.backgroundColor= 'white'
      }
       
   }
return (

<>
   <Router>
   <NavBar title = "TextUtils" bg= {mode} toggle={toggleMode} />
   <div className="container mt-3">
   <Routes>
         <Route  path="/upper" element={<TextFile heading="Enter Text" bg={mode}/> }/>  
   </Routes>
   <Routes>
         <Route exact path="/lower" element={<About heading="Enter Text" bg={mode}/>}/>                 
   </Routes> 
   </div>
   </Router> 
</>
);
}

export default App;