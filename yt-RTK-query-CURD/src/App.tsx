
import { FormEvent, useState } from 'react';
import './App.css'
import PostsCard from './components/PostsCard';
import { useGetPostsQuery, useNewPostMutation } from './redux/api'

function App() {
  
  const {isLoading,isError,isSuccess,data,status,fulfilledTimeStamp,error} =useGetPostsQuery("")
   
  console.log("fetch data",isLoading,isError,isSuccess,data,status,fulfilledTimeStamp,error);

  const [title,setTitle] = useState<string>("")
  const [body,setBody] = useState<string>("")

  const [newPost] = useNewPostMutation()

  const submitHandler =(e:FormEvent<HTMLFormElement>):void =>{

    e.preventDefault()

    const post:Post={
      title,
      body,
      userId:Math.random()*1000,
      id: Math.random() * 1000,
      
    }

    newPost(post)
    setTitle("")
    setBody("")

  }
  
  return (
    <>
      <h1>RTK query</h1>

      <form onSubmit={submitHandler}
      style={{display:'flex',gap:'1rem', flexDirection:"column"}}>
        <label>Title</label>
        <input  
        style={{padding:"1rem", fontSize:"1.5rem"}} 
        type='text' 
        placeholder='title'
        value={title}
        onChange={(e)=> setTitle(e.target.value)}
        />
        <label>Body</label>

        <input 
        style={{padding:"1rem", fontSize:"1.5rem"}}
        type='text' 
        placeholder='Body'
        value={body}
        onChange={(e)=>setBody(e.target.value)}
        />
        <button type="submit">Post</button>
      </form>


      {
        isLoading?<div><h1>LOADING ..........</h1></div>:data?.map(i=>(
          <PostsCard key={i.id} post={i} />
        ))
      }

    </>
  )
}

export default App
