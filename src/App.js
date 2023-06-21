import './App.css';
// import {Planets} from './User'
import {useState} from 'react'
function App() {
  const [state,setState]= useState(false)
   return (
    
     <div className='App'>
         {/* <Planets text={text}/> */}
         <button onClick={()=>{
           setState(!state)
         }}>Show/Hidden</button>
         {state && <h1>Hello ! This is jithin chacko</h1> }
     </div>
   )
}
export default App;
