import './App.css';
// import {Planets} from './User'
import {useState} from 'react'
function App() {
  const [age,setAge]= useState(0)
   const incrementAge=()=>{
     setAge(age+1)
   }
   return (
     <div className='App'>
         {age}
         <button onClick={incrementAge}>increment age</button>
     </div>
   )
}
export default App;
