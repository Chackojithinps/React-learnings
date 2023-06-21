import './App.css';
import {Planets} from './User'
import {useState} from 'react'
function App() {
  const [text,setText]= useState("")
  const changeText=(event)=>{
      setText(event.target.value)
  }
   return (
    
     <div className='App'>
         <Planets text={text}/>
         <input onChange={changeText} type='text'/>
         
         
     </div>
   )
}
export default App;
