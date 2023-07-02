import React from 'react'
import AppContext from '../../Context'
function Five() {
  const {state,setState} = React.useContext(AppContext)
//   const {name} =React.useContext(AppContext)
  return (
    <div>
        
      <h1>This is Five {state} </h1>
      <button onClick={()=>{
        setState(state+1)
      }}>Add Count</button>
    </div>
  )
}

export default Five
