import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

function LoggerComponent() {
  const [count,setCount]=useState(0);

  useEffect(()=>{
    console.log('the value of count is:',count)
  })
  return (
    <div>
      <h1>count:{count}</h1>
      <button onClick={()=>{
        setCount(count+1)
      }}>click</button>
    </div>
  )
}

export default LoggerComponent
