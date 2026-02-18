import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import LoggerComponent from './components/LoggerComponent'
import TimerComponent from './components/TimerComponent'
import MultiComponent from './components/MultiComponent'
import Counter from './components/Counter'

function App() {
  // const [count,setCount]=useState(0);
  // const[sum,setSum]=useState(1);

  //first ->side -effect function
  //second->clean-up function
  //third->comma separated dependency list

  // useEffect(()=>{
  //   first 
  //   return ()=>{
  //     second
  //   }
  // },[third])

  //variation:1
  //runs on every render
//   useEffect(()=>{
//     alert("Run on each render")
//   })


// variation:2
//that runs on only first render
// useEffect(()=>{
// alert("runs on 1st render")
// },[])

//variation:3
// useEffect(()=>{
//  alert('run every time when count is updated')
// },[count])

//variation:4
//multiple dependencies
//  useEffect(()=>{
//  alert('run every time when count/sum is updated')
// },[count,sum])

//variation:5
//add cleanup function
// useEffect(()=>{
//   alert("count is updated")
//   return ()=>{
//    alert("count is unmount from UI");
//   }
// },[count])


// const btnCount=()=>{
//   setCount(count+1);
//  }
//  const btnSum=()=>{
//   setSum(sum+10);
//  }

  return (
    <div>
     {/* < LoggerComponent/> */}
     {/* <TimerComponent/> */}
     {/* <MultiComponent/> */}
     <Counter/>

     {/* <div>
      <h1>count:{count}</h1>
     <button onClick={btnCount}>Click</button>

     </div>
       <div>
        <h1>sum:{sum}</h1>
       <button onClick={btnSum}>Click</button>
       </div> */}


    </div>
  )
}
 
export default App
