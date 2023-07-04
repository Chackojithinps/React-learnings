import React from "react"
// import AppContext from "./Contex
import { useSelector,useDispatch } from "react-redux"
import { inNum,deNum } from "./Actions/index"
 export const App = () => {
  const counter= useSelector(state=>state.changeNumber);
  const dispatch=useDispatch();
  return (
    <>
         <h1>{counter}</h1>
         <button onClick={()=>dispatch(inNum())}>+</button>
         <button onClick={()=>dispatch(deNum())}>-</button>
    </>
  )
}


