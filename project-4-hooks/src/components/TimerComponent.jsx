import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

function TimerComponent() {
  const [second,setSecond]=useState(0)

  useEffect(()=>{
    alert("hey!!")
  const interval=setInterval(()=>{
    console.log("setInterval running...");
    setSecond(prev=>prev+1);
  },1000)
   return ()=>{
    console.log("timer stop!!!");
    clearInterval(interval);
   }
  },[]);
  //it will run on 1st render only

  return (
    <div>
      <h1>second:{second}</h1>
    </div>
  )
}

export default TimerComponent
