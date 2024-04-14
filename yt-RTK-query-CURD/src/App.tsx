
import './App.css'
import PostsCard from './components/PostsCard';
import { useGetPostsQuery } from './redux/api'

function App() {
  
  const {isLoading,isError,isSuccess,data,status,fulfilledTimeStamp,error} =useGetPostsQuery("")
   
  console.log("fetch data",isLoading,isError,isSuccess,data,status,fulfilledTimeStamp,error);
  
  return (
    <>
      <h1>RTK query</h1>

      {
        data?.map(i=>(
          <PostsCard post={i} />
        ))
      }

    </>
  )
}

export default App
