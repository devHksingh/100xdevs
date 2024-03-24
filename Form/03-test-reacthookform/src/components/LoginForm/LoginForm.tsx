import {useForm, SubmitHandler} from 'react-hook-form'
import {z} from zod
import { zodResolver } from '@hookform/resolvers/zod'

interface Login{
    userName:string
    password:string
    userId:string
}

const schema = z.object({
    userName: z.string(),
    password:z.string().min(6,{message:'Enter 6 digit password'}),
    userId: z.string()
})

function LoginForm() {
    const{register,handleSubmit,formState:{errors}} = useForm<Login>({
        resolver:zodResolver(schema)
    })
  return (
    <div>
        <h1>LoginForm</h1>



    </div>

  )
}

export default LoginForm