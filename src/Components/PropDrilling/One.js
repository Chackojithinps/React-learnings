import React, { useState } from 'react'
import Two from './Two'
import {TestContext} from '../../Context'
function One() {
    const [name,setName] = useState('Kiran Vasu')
  return (
    <TestContext.Provider value={{name}}>
      <h1>This is One</h1>
      <Two />

    </TestContext.Provider>
  )
}

export default One
