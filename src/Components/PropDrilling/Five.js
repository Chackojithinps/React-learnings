import React, { useContext } from 'react'
import {TestContext,AppContext} from '../../Context'

function Five() {
  const {state,setState} = React.useContext(AppContext)
  const {name} = useContext(TestContext)
  return (
    <div>
        
      <h1>This is Five {name} {state}</h1>
      <button onClick={()=>{
        setState(state+1)
      }}>Add Count</button>
    </div>
  )
}

export default Five
