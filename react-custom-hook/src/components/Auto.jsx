
import useAutorefreshing from '../hooks/useAutorefreshing'

function Auto() {
    const { todo, loading } = useAutorefreshing(5);

    // console.error(todos);
    if(todo){
        console.log(todo);
    }

  if (loading) {
    return <div>
      Loading...
    </div>
  }

  return (
    <>
      
      <Track todo={todo} />
      
      
    </>
  )

  function Track({ todo }) {
    return (
      <div>
        <h1>{todo.image}</h1>
      </div>
    );
  }
}




export default Auto