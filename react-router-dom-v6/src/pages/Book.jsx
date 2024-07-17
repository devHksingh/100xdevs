import { useParams } from "react-router-dom"


const Books = () => {
  const {id}= useParams()
  return (
    <div>Book {id}</div>
  )
}

export default Books