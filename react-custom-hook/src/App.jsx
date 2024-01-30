import { useState } from 'react'

import './App.css'
import { useEffect } from 'react'
import MountEffect from './components/MountEffect'
import useTodos from './hooks/useTodos'
import useLoading from './hooks/useLoading'
import useAutorefreshing from './hooks/useAutorefreshing'
import Auto from './components/Auto'

// function App() {
//   const [state, setState] = useState(true)

//   // const todos = useTodos()

//   const {isLoading,currentTodos} = useLoading()
  
//   if (isLoading) {
//     return <div>
//       Loading...
//     </div>
//   }


  


 

//   return (
//     <>
//     {/* <MountEffect></MountEffect> */}
//     {/* {todos.map(todo => <Track todo ={todo}/>)} */}
//     <div>
//     {currentTodos.map(todo => <Track  todo={todo} />)}
//     </div>
//     </>
//   )
// }

// function Track({todo}){
//   return (
//     <div>
//       <h1>{todo.title}</h1>
//       <br></br><hr/>
//       <p>{todo.description}</p>
//     </div>
//   )
// }

function App() {
  const { loading, todos: currentTodos } = useLoading();
  

  // console.log(loading);
  // console.log(currentTodos);



  if (loading) {
    return <div><h1>Loading...</h1></div>;
  }

  return (
    <>
      <div>
      {/* <Auto/> */}
        {/* {currentTodos.map((todo) => (
          
          <Track key={todo.id} todo={todo} />
        ))} */}
      </div>
    </>
  );
}
function Track({todo}){
  return (
    <div>
      <h1>{todo.title}</h1>
      <br></br><hr/>
      <p>{todo.description}</p>
    </div>
  )
}

export default App
