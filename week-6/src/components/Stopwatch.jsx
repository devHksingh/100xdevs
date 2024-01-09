import React, { useEffect, useState } from 'react'

function Stopwatch() {
    const [count,setCount]=useState(0)
    useEffect(()=>{
        console.log('add  new interval');
       const timer = setInterval(()=>{
        setCount(count+1)
       },1000)
       
       return function(){
        console.log('clear old interval');
        clearInterval(timer)
       }
    },[count])
  return (
    <div>
        <h1>StopWatch</h1>
        <p>Current time is {count}</p>
    </div>
  )
}

export default Stopwatch