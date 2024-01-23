import { useContext, useState } from 'react'


import './App.css'
import Counter from './components/Counter'
import {CounterContext} from './context/Counter'

function App() {
  const [count, setCount] = useState(0)

  const counterState = useContext(CounterContext)

  console.log('context',counterState);



  return (
    <>
      <div>
        <h1>Count is {counterState.count}</h1>
        <Counter/><br /><hr />
        <Counter/><br />
        <Counter/><br />
      </div>
    </>
  )
}

export default App
