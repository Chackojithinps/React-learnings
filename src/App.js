import React from "react"
// import AppContext from "./Contex
import { useSelector,useDispatch } from "react-redux"
 export const App = () => {
  const counter=useSelector(state=>state.counter)
  const dispatch=useDispatch()
  const increment=()=>{
     dispatch({type:"INC"})
  }
  const decrement=()=>{
    dispatch({type:"DEC"})
  }
  const addFunction =()=>{
    dispatch({type:"ADD",payload:10})
  }
  
  return (
    <>
        <h1>Counter appp</h1>
        <h2>{counter}</h2>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>decrement</button>
        <button onClick={addFunction}>ADD</button>
    </>
  )
}


