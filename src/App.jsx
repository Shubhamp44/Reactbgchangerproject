import { useState } from 'react'
import './App.css'





function App() {
  const [color, setColor] = useState("blue")

  return (
    


      <div className= "main" style={{backgroundColor:color}}>
        
        
 <h1 class="styled-heading">BG COLOR CHANGER</h1>

<div className="inbox">

  <button  id='rb' className ="custom-button"onClick={()=>{setColor("red")}}>red</button>
  <button  id ='bb' className ="custom-button"onClick={()=>{setColor("black")}}>black</button>
  <button  id ='yb'className ="custom-button"onClick={()=>{setColor("yellow")}}>yellow</button>
  <button  id = 'pb'className ="custom-button"onClick={()=>{setColor("pink")}}>pink</button>
  <button  id = 'pbu'className ="custom-button"onClick={()=>{setColor("purple")}}>purple</button>
  <button  id = 'gb'className ="custom-button"onClick={()=>{setColor("green")}}>green</button>
  <button  id = 'grb'className ="custom-button"onClick={()=>{setColor("gray")}}>gray</button>
  <button  id = 'brb'className ="custom-button"onClick={()=>{setColor("brown")}}>brown</button>

 
</div>

      </div>
      
    
  )
}

export default App
