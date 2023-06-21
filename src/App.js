import logo from './logo.svg';
import './App.css';

function App() {
   const age=116;
   const isColor=true;
   return (
     <div className='App'>
        {age>=18?<p1>over age</p1>:<p>under Age</p>}
        <h1 style={{color:isColor?"green":"red"}}>Jithin</h1>

        {isColor && <button>This is a button</button>}
     </div>
   )
}


export default App;
