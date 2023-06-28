import { useEffect } from 'react';
import './App.css';
import { useState} from 'react';
function App() {
   const [state,setState]=useState(0)
   useEffect(() => {
    
    console.log("This is component testing")
   },[state])
   
   return (
       <div className='App'>
           <button onClick={()=>setState(state+1)}>Add</button>
           <p>{state}</p>
       </div>
   )
}
export default App;
