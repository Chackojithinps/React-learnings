import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Job name='jitin' age={24} place='kannur'/>
    </div>
  );
}

const name2="kiran"

function Job(props){
  return(
    <div>
       <h1>{name2}</h1>
       <p>{props.age}</p>
       <p>{props.place}</p>
    </div>
  )
}

export default App;
