import logo from './logo.svg';
import './App.css';
import {User} from './User'

function App() {
   const names=[
    {name:"jithin",age:12},
    {name:"kiran",age:24},
    {name:"amal",age:28}
   ]
   return (
     <div className='App'>
        {names.map((user,key)=>{
          return <User name={user.name} age={user.age} key={key}/>
        })}
     </div>
   )
}




export default App;
