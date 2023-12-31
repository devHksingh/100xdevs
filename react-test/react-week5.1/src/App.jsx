import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Testbtn count={count} setCount={setCount}></Testbtn><br /><br />
      <Testbtn count={count+1} setCount={setCount}></Testbtn><br /><br />
      <Testbtn count={count*2} setCount={setCount}></Testbtn><br /><br />
    </>
  )
}
function Testbtn(props){

  function onclikhandler(){
    props.setCount(props.count +1)
  }
  return <button onClick={onclikhandler}>
    count {props.count}
  </button>
}

export default App
