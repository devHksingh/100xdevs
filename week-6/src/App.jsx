import {  useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
// import axios from 'axios'
import Timer from './components/Timer'
import Stopwatch from './components/Stopwatch'

function App() {
  // const [todo, setTodo] = useState({})
  const [isvisible,setIsvisible] = useState(true)

  return (
    <div>
      {/* <Todo id={10}></Todo> */}
      {isvisible? <Timer></Timer>:<></>}
      <button onClick={()=>{setIsvisible(!isvisible)}}>Toggle </button><br></br>
      <Stopwatch></Stopwatch>
    </div>
  )
}

// function Todo({id}){
  // const [todo,setTodo] = useState({})
  // useEffect

  // useEffect(()=>{

  //   async function fetchTodo(){
         
  //     try {
  //       const response = await axios.get('https://sum-server.100xdevs.com/todo?id='+`${id}`)

  //       console.log(response.data.todo);
  //       setTodo(response.data.todo)

  //     } catch (error) {
  //         if(error.response){
  //           // The client was given an error response
  //           console.log(error.response.data);
  //           console.log(error.response.status);
  //           console.log(error.response.headers);
  //         }else if(error.request){
  //           // The client never received a response, and the request was never left
  //           console.log(error.request);

  //         }else{
  //           // Anything else
  //           console.log('Error', error.message);
  //         }
  //     }
  //    }
     
  //    fetchTodo()  


  // },[])

  // useEffect(()=>{
  //   console.log('App component is Mounting .......');
  // },[])

//   return <div>
//     {/* <h1>{todo.title}</h1> */}
//     {/* <h4>{todo.description}</h4> */}
    
    
//   </div>

// }

export default App
