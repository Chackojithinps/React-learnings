import logo from './logo.svg';
import './App.css';

function App() {
   const names=["jithin","arun","kiran"]
   return (
     <div className='App'>
         {names.map((val,key)=>{
            return <h1 key={key}>{val}</h1>
         })}
     </div>
   )
}


export default App;
