import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Form from './components/Form';
import { useState } from 'react';
import Alert from './components/Alert';
import About from './components/About';
import React from "react";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link
} from 'react-router-dom';


function App() {
  let [mode, modeFun] = useState('light');
  const [alert,alertfun] = useState(null);

const showAlert = (msg='Alret',type='success')=>{
  alertfun({
    msg:msg,
    type:type
  })
setTimeout(() => {alertfun(null)
  
}, 1800);

}
  const toggleMode = ()=>{
    if(mode === 'light'){
      modeFun('dark');
      document.body.style.backgroundColor = 'gray';
      showAlert("Dark mode on",'success');
      setInterval(()=>{
        
        document.title = "Dark mode"
      },500)
    }
    else{
      modeFun('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode on",'success');
      setInterval(()=>{
        
        document.title = "Ligt  mode"
      },1000)
    }
  }
  return (
    <Router>
    <>
    <Navbar mode={mode} toggle={toggleMode} showAlert= {showAlert}/>
    <Alert alert={alert}/>
    <div className='container'>
    <Routes>
                 <Route exact path='/' element={< Form mode={mode} showAlert={showAlert}/>}></Route>
                 <Route exact path='/about' element={< About />}></Route>
    </Routes>
    </div>

    {/* <Navbar mode={mode} toggle={toggleMode} showAlert= {showAlert}/>
    <Alert alert={alert}/>
    <div className='container'>
    <Form mode={mode} showAlert={showAlert}/>
    </div>
    <About/> */}

    </>
    </Router>
    
  );
}

export default App;
