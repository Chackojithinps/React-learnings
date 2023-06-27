import './App.css';
// import {Planets} from './User'
import {useEffect, useState} from 'react'
import { Counter } from './Counter';
// import { Task } from './Todo';
function App() {
   // const [newTask,setNewtask]=useState("")
   // const [Todo,setTodo]=useState([])
   const [counter,setCounter]=useState(false)
   // const newItems=(event)=>{
   //    setNewtask(event.target.value)
   // }
//    const addItems=()=>{
//       const task={
//          id:Todo.length===0?1:Todo[Todo.length-1].id+1,
//          taskName:newTask,
//          completed:false
//       }
//       setTodo([...Todo,task])
//    }
//    const deleteItem = (newId) => {
//     var newTodLists = Todo.filter((task) =>{
//       return task.id!==newId
//     })
    
//     setTodo(newTodLists)
//   };
//   const completeItem=(newId)=>{
//    setTodo(
//       Todo.map((task)=>{
//          if(task.id===newId){
//             return {...task,completed:true}
//          }else{
//             return task
//          }
//       })
//    )
//  }
//  const addCount=()=>{
//      setCount(count+1)
//  }
 useEffect(()=>{
    console.log("mounting......")
 })
 const showHidden=()=>{
    setCounter(!counter)
 }
//   const obj={
//     title:"first counter",
//     count,
//     place:"Kannur"
//   }
   return (
       <div className='App'>
         {/* <div>
            <input onChange={newItems} text/>
            <button onClick={addItems}>Add Items</button>
         </div>
         <div>
             {Todo.map((item,key)=>{
                   return <Task taskName={item.taskName} id={item.id} deleteItem={deleteItem} completeItem={completeItem} />
             })}
         </div> */}
         <button onClick={showHidden}>Show / Hidden</button>
         {/* {counter?<Counter/> : null} */}
         {counter && <Counter />}
       
       </div>
   )
}
export default App;
