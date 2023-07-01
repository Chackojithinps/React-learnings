import axios from 'axios'
import React from 'react'
import { useState } from 'react'
 export const App = () => {
    const [state,setState]= useState([])
    const [bool,setBool]=useState(false)
   
  return (
    <div>
        <h1>Hello world</h1>
        <button onClick={()=>{
            setBool(true)
            axios.get('https://jsonplaceholder.typicode.com/posts').then((res)=>{
               console.log(res)
               setState(res.data)
               setBool(false)
               
            })
        }}>Generate API</button>
        {    
             bool!==true?
             state.map((item,index)=>
                <div>
                 <h1>{index+1}</h1>
                 <h4>{item.title}</h4>
                </div>
            ):"Loading......"
        }
    </div>
  )
}


