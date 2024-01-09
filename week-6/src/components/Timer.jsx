import React, { useEffect, useState } from 'react'

function Timer() {
    const [count,setCount] = useState(0)
    // const [isvisible,setIsvisible] = useState(true)

    useEffect(()=>{
         console.log('Timer is mounting .....');  
         
         return function(){
            console.log(`Unmount`);
         }
    },[])

    useEffect(()=>{
      console.log(`count is updated.... ${count}`);

      return function(){
        console.log(`returning count function count is ${count}`);
      }
    },[count])

    useEffect(()=>{
        
    },[])

  return (
    <div>
        
        <h1>Count {count}</h1> 
             <button onClick={()=>{
                setCount(count+1)
             }}>count+</button>  
            
        
    </div>
  )
}

export default Timer