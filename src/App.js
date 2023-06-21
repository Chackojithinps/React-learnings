import './App.css';
// import {Planets} from './User'
import {useState} from 'react'
function App() {
  const [color,setcolor]= useState("black")
   return (
       <div className='App'>
         <button onClick={()=>{
           setcolor(color==="black" ? "red" : "black")
         }}>change color</button>
        
      <h1 style={{color:color}}>Hello! This is Jithin chacko </h1>
     </div>
   )
}
export default App;
