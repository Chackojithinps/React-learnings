import logo from './logo.svg';
import './App.css';

function App() {
   const age=116;
   if(age>=18){
    return <h1>Verified</h1>
   }else{
    return <h1>Not Verified</h1>
   }
}


export default App;
