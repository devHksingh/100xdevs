import { useEffect,useState } from "react";
import axios from "axios";

export default function useAutorefreshing(n){

    const [todo,setTodo]= useState({})
    const [loading,setLoading]= useState(true)

    async function getData(){
        try {
            const res = await axios.get('https://fakestoreapi.com/products/1')
            setTodo(res.data)
            console.log(res.data);
            setLoading(false)
            
        } catch (error) {
            console.log('Error',error); 
        }
    }

    useEffect(()=>{
        setInterval(() => {
            getData()
            
        }, n*1000);
    },[n])

    return {
        todo:todo,
        loading:loading
    }

}