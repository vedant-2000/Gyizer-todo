import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  
  const [title, setTitle] = useState("")
  const [info, setInfo] = useState("")
  const [list, setList] = useState([])
  
function handleShow(){

  return (list?.map((key,id)=>
    <div className='rectangle5'>
    
      <h3>{key.title}</h3>
      <p>{key.info}</p>
      </div>
  ))
}

  
function handleSubmit(){
    // debugger;
  const todo = {
    title:title,
    info:info,
    id: Date.now(),
  };
  let temp=list;
  temp.push(todo);
setList(temp)
handleShow();
console.log(list)
}

  return (
    <div className="backg">
      <div className="rectangle1 ">
        <div className="title"> GYIZER </div>
        <div className="sub-title"> TODO APP </div>
      </div>
      <div className="rectangle2">
        <div className='row w-100'>
          <div className='col-10'>
              <input className='mb-2' type="text"
              name="ti"
           
              onChange={(e)=>setTitle(e.target.value)}
              placeholder='Title...'/>
              <input  type="text" placeholder='Add...' 
              name="in"
                
              onChange={(e)=>setInfo(e.target.value)}/>
    
          </div>
          <div className='col-2'>
            <button className="btncss" onClick={handleSubmit}>+</button>
          </div>
        </div>
      </div>
      <div className="rectangle4">
      {list.length==0?<h3>No Task</h3>:handleShow()}
      </div>



    </div>

  );
}

export default App;
