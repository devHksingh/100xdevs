import {useForm} from "react-hook-form"
import axios from 'axios'


function LoginForm() {

    const {register,handleSubmit} = useForm()
    
    const onSubmit = async (data)=>{
        console.log(data);
        // const {name,email,password} = data
        // console.log(name);
        // console.log(email);
        // console.log(data.password);

        // axios.post('http://localhost:5513/api/users/register',{
        //     name:data.name,
        //     email:data.email,
        //     password:data.password
        // })
        //  .then((response)=>{
        //     console.log(response)
        //     console.log(typeof(response))
        //  })
        //  .catch((error)=>{
        //     console.log(error);
        //  })

        try{
            const response = await axios.post('http://localhost:5513/api/users/register',data)
            console.log(response.data);
        }catch(error){
            console.log(error);
        }
        
    }
  return (
    <div className="min-h-screen hero bg-base-200">
        <div className="flex-col hero-content lg:flex-row-reverse">
            <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            </div>
            <div className="w-full max-w-sm shadow-2xl card shrink-0 bg-base-100">
            <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Name:</span>
                </label>
                <input {...register('name',{required:true})} type="text" placeholder="name" className="input input-bordered" required />
                </div>
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Email</span>
                </label>
                <input {...register('email',{required:true})} type="email" placeholder="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Password</span>
                </label>
                <input {...register('password',{required:true})} type="password" placeholder="password" className="input input-bordered" required />
                <label className="label">
                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
                </div>
                <div className="mt-6 form-control">
                <button className="btn btn-primary">Login</button>
                </div>
            </form>
            </div>
        </div>
    </div>
  )
}

export default LoginForm