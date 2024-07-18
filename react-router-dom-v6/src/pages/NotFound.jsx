import { useEffect } from "react"
import {Navigate,useNavigate} from "react-router-dom"

const NotFound = () => {
  const navigate = useNavigate()
  useEffect(()=>{
    setTimeout(()=>{
      navigate("/")
    },2000)
  },[navigate])
  return (
    <Navigate to={'/'} />
  )
}

export default NotFound