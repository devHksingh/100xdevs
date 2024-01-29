import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

function MountEffect() {
    const [render,setRender] = useState(true)

    useEffect(()=>{
        setInterval(()=>{
            setRender(r=>!r)
        },5000)
    },[])
  return (
        <>
            {render? <Mycomponent />:<div><h1>Component is unmount !!!!</h1></div>}
        </>
        
  )
}

function Mycomponent(){

    useEffect(()=>{
        console.log("Component Mounted $$");

        return ()=>{
            console.error("Component is unmounted!!!!!");
        }
    },[])

    return (
        <div>
            <h1>Component is Mounted@@</h1>
        </div>
    )

}

export default MountEffect

/*
ANOTHER WAY 

function App() {
  const [state, setState] = useState(true)

  


  useEffect(()=>{
    const x=  setInterval(()=>{
      setState(e=>!e)
    },3000)
    console.log('Component is mounting .....');


    return ()=>{
        clearInterval(x)
        console.error("Component is Unmounting ........!!!");
    }
  },[state])

  return (
    <>
    {state? <div>Mounting</div>:<div>Un</div>}
    </>
  )
}


*/