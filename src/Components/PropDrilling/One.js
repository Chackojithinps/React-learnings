import React, { useState } from 'react'
import Two from './Two'
function One() {
    const [name,setName] = useState('Kiran Vasu')
  return (
    <>
      <h1>This is One</h1>
      <Two />

    </>
  )
}

export default One
