// import { useState } from "react";

// In this assignment, your task is to create a component that performs an expensive calculation (finding the factorial) based on a user input. 
// Use useMemo to ensure that the calculation is only recomputed when the input changes, not on every render.

// export function Assignment1() {
//     const [input, setInput] = useState(0);
//     // Your solution starts here
//     const expensiveValue = 0; 
//     // Your solution ends here

//     return (
//         <div>
//             <input 
//                 type="number" 
//                 value={input} 
//                 onChange={(e) => setInput(Number(e.target.value))} 
//             />
//             <p>Calculated Value: {expensiveValue}</p>
//         </div>
//     );
// }

import React, { useEffect, useMemo, useState } from 'react'

function Assignment1() {

    const [input, setInput] = useState(1);
    const [display,setDisplay] = useState('');
    const [dark,setDark] = useState(false)


    const expensiveValue = useMemo(()=>{
        return factorial(input)
    },[input])

    function factorial(n){
        console.log('inside fact');
        let i=0 
        while(i<9999999) i++
        if(n===0 || n<0 ){
            return 0
        }else if(n === 1){
            return 1
        }else{
            return n * factorial(n-1)
        }
        
    }

    const themeStyle = useMemo(()=>{
        return {
            backgroundColor: dark? 'black':'white',
            color: dark?'white':'black'
        }
    },[dark])

    useEffect(()=>{
        console.log('Theme change');
        
    },[themeStyle])


//     // Your solution ends here
    
  return (
    <div>
        <div style={themeStyle}>
            <input 
                    type="number" 
                    value={input} 
                    onChange={(e) => setInput(Number(e.target.value))} 
                />
                <p>Calculated Value: {expensiveValue}</p>
                <input
                    type='text'
                    placeholder='Name'
                    onChange={(e)=>setDisplay(e.target.value)}
                ></input>
                <p>Your name is {display}</p><hr></hr>
                <button onClick={()=>{setDark(!dark)}}>Change theme</button>
        </div>
             
    </div>
  )
}

export default Assignment1