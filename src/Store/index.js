// import { createStore } from "redux";

// const reduceFn=(state={counter:0},action)=>{
//    if(action.type === "INC"){
//      return {counter:state.counter+1}
//    }
//    if(action.type === "DEC"){
//      return {counter:state.counter-1}
//    }
//    if(action.type=='ADD'){
//     return {counter:state.counter+action.payload}
//    }
//    return state
// }
// const store=createStore(reduceFn)
// export default store;

import { createStore } from 'redux'

const reducer = (prevState = {counter:0},action)=>{
     switch(action.type){
       case "INC":
        return{
           counter:prevState.counter+1
        }
        case "DEC":
          return{
            counter:prevState.counter-1
          }
        case "ADD":
            return{
               counter:prevState.counter+action.payload
            }
        default:
          return prevState
     }
}

const store = createStore(reducer)
export default store