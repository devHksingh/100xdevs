import { useForm ,SubmitHandler } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import {z} from 'zod'

interface Address{
    address:string
    street: string
    pincode: number
}

const schema = z.object({
    address: z.string().min(2),
    street: z.string().min(2),
    pincode:z.string().min(6).max(6)
}).required()



function DaisyUiForm() {
    const {register,handleSubmit,formState:{errors}} =useForm<Address>({ resolver:zodResolver(schema)})

    const onSubmit:SubmitHandler<Address>= (data)=>{
        console.log(data);     
    }

  return (
    <div >
        <nav className=" text-center font-mono text-3xl mb-4 p-2">DaisyUiForm</nav>
        <div className=" h-auto">
            <div className="flex flex-col w-full lg:flex-row">
                <div className="grid  flex-grow h-auto card bg-base-300 rounded-box place-items-center">
                    <ul className="steps steps-vertical">
                         <li className="step step-info">Fly to moon</li>
                        <li className="step step-info">Shrink the moon</li>
                        <li className="step step-info">Grab the moon</li>
                        <li className="step step-error" data-content="?">Sit on toilet</li>
                    </ul>
# Vertical timeline without icons
                </div> 
                <div className="divider lg:divider-horizontal"></div> 
                <div className="grid flex-grow h-auto card bg-base-300 rounded-box place-items-center w-1/2">
                {/* Form */}
                <h1>Form</h1>
                <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col justify-center items-center">

                    <label className="form-control w-full max-w-xs">
                        <div className="label">
                            <span className="label-text">Enter your address</span>
                            <span className="label-text-alt">Required</span>
                        </div>
                        <input {...register('address')} type="text" placeholder="address" className="input input-bordered w-full max-w-xs" />
                        <div className="label">
                            <span className="label-text-alt text-red-500">{errors.address && <span className="text-red-600">{errors.address.message}</span>}</span>
                            
                            {/* <span className="label-text-alt">Bottom Right label</span> */}
                        </div>
                        
                    </label>

                    <label className="form-control w-full max-w-xs">
                        <div className="label">
                            <span className="label-text">street</span>
                            <span className="label-text-alt">Top Right label</span>
                        </div>
                        <input {...register('street')} type="text" placeholder="street" className="input input-bordered w-full max-w-xs" />
                        <div className="label">
                            <span className="label-text-alt">
                                {errors.street && <span className="text-red-600">{errors.street.message}</span>}
                            </span>
                            {/* <span className="label-text-alt">Bottom Right label</span> */}
                        </div>

                    </label>
                    
                    <label className="form-control w-full max-w-xs">
                        <div className="label">
                            <span className="label-text">PinCode</span>
                            <span className="label-text-alt">Top Right label</span>
                        </div>
                        <input type="number" {...register('pincode')} placeholder="Type PinCode" className="input input-bordered w-full max-w-xs" />
                        <div className="label">
                            <span className="label-text-alt">{errors.pincode && <span className="text-red-600">{errors.pincode.message}</span>}</span>
                            {/* <span className="label-text-alt">Bottom Right label</span> */}
                        </div>
                        
                    </label>
                    

                    {/* <button type="submit">Submit</button> */}

                    <input type="submit"  className="outline rounded-lg px-4 py-2 mt-4 mb-4"/>

                </form>

                
                </div>
            </div>
        </div>
    </div>
  )
}

export default DaisyUiForm