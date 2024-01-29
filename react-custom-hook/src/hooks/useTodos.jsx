import { useEffect } from "react";
import { useState } from "react";
import axios from 'axios'


export default function useTodos(){
    const [todo,setTodo] = useState([])

    
    useEffect(()=>{
        ;(async()=>{
            const response = await axios.get("https://sum-server.100xdevs.com/todos")  
            setTodo(response.data.todos)
            // console.log(response.data.todos);
        
        })()

    },[])

    return todo
}