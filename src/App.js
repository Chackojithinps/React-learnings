import React from "react"
import One from './Components/PropDrilling/One'
import {useState} from 'react'
// import AppContext from "./Contex
import { AppContext } from "./Context"

 export const App = () => {
  const [state,setState] =useState(100);
  return (
    <AppContext.Provider value={{state,setState}}>
      <h1>App</h1>
      <One />  
    </AppContext.Provider>
  )
}


