import { useState } from 'react'
import './App.css'

function App() {
  const [res, setRes] = useState({
    num1 : "",
    num2 : "",
    value : 0,
    show : false
  })


  const handleChange = (event)=>{
    let {name,value} = event.target
    if(name=="number1"){
      setRes({...res,num1:value})
    }else{
      setRes({...res,num2:value})
    }
  }

  const handleAdd = ()=>{
    let {num1,num2}=res
    let add = parseInt(num1)+parseInt(num2);
      setRes({...res,value:add,show:true})
  }

  const handleSub = ()=>{
    let {num1,num2}=res
    let add = parseInt(num1)-parseInt(num2);
      setRes({...res,value:add,show:true})
  }

  const handleMul = ()=>{
    let {num1,num2}=res
    let add = parseInt(num1)*parseInt(num2);
      setRes({...res,value:add,show:true})
  }

  const handleDiv = ()=>{
    let {num1,num2}=res
    let add = parseInt(num1)/parseInt(num2);
      setRes({...res,value:add,show:true})
  }

  return (
    <div className="App">
      <div className='inputs'>
        <input type="number" name='number1' placeholder='Number 1' onChange={handleChange}></input>
        <input type="number" name='number2' placeholder='Number 2' onChange={handleChange}></input>
      </div>
      <div className='buttons'>
        <button style={{flex:"1"}} onClick={handleAdd}>Addition</button>
        <button style={{flex:"1"}} onClick={handleSub}>Subtract</button>
        <button style={{flex:"1"}} onClick={handleMul}>Multiplication</button>
        <button style={{flex:"1"}} onClick={handleDiv}>Division</button>
      </div>
      <hr />
      {res.show==true && <h1>{res.value}</h1> }
    </div>
  )
}

export default App
