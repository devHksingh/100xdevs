import axios from 'axios'

console.log(import.meta.env.REACT_APP_BACKEND_BASE_URL);


const api = axios.create({
    baseURL: 'http://localhost:5513',
    headers:{
        "Content-Type":'application/json',
    },

});

export const login = async (data:{email:string; password:string})=>{
    return api.post('/api/users/login',data)
}
