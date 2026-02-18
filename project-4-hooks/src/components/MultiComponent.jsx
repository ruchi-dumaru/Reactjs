import { useEffect } from 'react';
import { useState } from 'react'

function MultiComponent() {
  const [count,setCount]=useState(0);
  const [second,setSecond]=useState(1);


  useEffect(()=>{
   console.log("count changed",count);
  },[count])
//run every time count is changed

  useEffect(()=>{
    const intervalId=setInterval(()=>{
      console.log("setInterval executing...")
     setSecond(prev=>prev+1)
    },1000);

    return (()=>{
      console.log("time stop")
      clearInterval(intervalId);
    })
  },[]);
  //it will run only on first render

 
  return (
    <div>
      <h1>count:{count}</h1>
      <button onClick={()=>{
        setCount(prev=>prev+1)
      }}>Increase Count</button>
      <h1>second:{second}</h1>
    </div>
  )
}

export default MultiComponent
