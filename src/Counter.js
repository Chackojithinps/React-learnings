import { useState } from "react"

export const Counter=()=>{
    const [count,setCount]=useState(0)
    return (
        <>
        <button onClick={()=>setCount(count+1)}>Increment</button>
        <h1>This is component Counter : {count} </h1>

        </>
    )
}