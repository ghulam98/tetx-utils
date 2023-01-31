import React, { useState } from 'react'

export default function Form(props) {
    let [txt, txtFun] = useState("");
    const clear = ()=>{
        txt = "";
        txtFun(txt);
        props.showAlert("Erased all",'danger');
    }
    
    const upper = ()=>{
        txt = txt.toUpperCase();
        txtFun(txt);
        props.showAlert("Converted into Upper",'success');
    }
    const lower = ()=>{
        txt = txt.toLowerCase();
        txtFun(txt);
        props.showAlert("Converted into Lower",'success');
    }
    const change = (e)=>{
        console.log(e)
        txtFun(e.target.value)
        
    }

  return (
    <div style={{ color:props.mode === 'dark'?'white':'black'}}>
  <h1>Here you will see string operations.</h1>
  <div className="mb-3">
    <label  className="form-label">Example textarea</label>
    <textarea className="form-control" value={txt} onChange={change} id="exampleFormControlTextarea1" rows="7" style={{backgroundColor: props.mode === 'dark'?'grey':'white' , color:props.mode === 'dark'?'white':'black'}}></textarea>
  </div>
  <button className='btn btn-danger mx-1 my-1' onClick={clear}>Clear</button>
  <button className='btn btn-primary mx-1 my-1' onClick={upper}>ToUpper</button>
  <button className='btn btn-primary mx-1 my-1' onClick={lower}>ToLower</button>

  <h2>Summary</h2>
  <p><b>{txt.split(/[ ]+/).filter((elem)=>elem.length!==0).length}</b> Words and <b>{txt.length}</b> Charecters</p>
  <h3>Preview</h3>
  <p>{txt}</p>
  </div>
  )
}
