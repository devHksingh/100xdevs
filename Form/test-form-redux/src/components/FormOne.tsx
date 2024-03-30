import  {z} from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import {useForm,SubmitHandler, Controller} from 'react-hook-form'
import { DayPicker,  } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { format } from "date-fns"
import { SlCalender } from "react-icons/sl";
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { addFormOneData } from '../features/formSlice';''
// import { useState } from 'react';


enum GenderEnum{
  female='female',
  male ="male",
  other= "other"
}

enum TitleEnum {
  Mr='Mr',
  Mrs='Mrs',
  Miss='Miss',
  Dr = 'Dr'
}

enum RoleEnum {
  SD1 ='SD1',
  SD2 ='SD2',
  SD3 ='SD3',
  Manager = 'Manager',
  TeamLead = 'TeamLead',
}


interface InfoForm {
  title:TitleEnum
  fullName:string
  gender:GenderEnum
  role:RoleEnum
  age:Date
}


const schema = z.object({
  title: z.enum(['Mr','Mrs','Miss','Dr']),
  fullName:z.string().min(2),
  gender: z.enum(['male','female','other']),
  role: z.enum(['SD1','SD2','SD3','TeamLead','Manager']),
  age: z.date({
    required_error: "Please select DOB",
    invalid_type_error: "That's not a date!",
})


})



function FormOne() {
  // const [selected, setSelected] = useState<Date>();
  // let footer = <p>Please pick a day.</p>;
  // if (selected) {
  //   // console.log(selected);
    
  //   footer = <p>You picked {format(selected, 'PPP')}.</p>;
  // }
  const dispatch = useAppDispatch()
  const {register,control,handleSubmit,formState:{errors}} = useForm<InfoForm>({
    resolver:zodResolver(schema)
  })
  const onsubmit:SubmitHandler<InfoForm> = (data)=>{
    // data.age = new Date(data.age); // Convert to Date object if needed
    console.log(data);
    dispatch(addFormOneData(data))
    console.log('done');

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const storeData = useAppSelector((state)=> state.userForm.formOne)
    console.log(storeData);
    
    
    
  }
  return (
    <div>
      <h1 className='m-4 text-2xl font-semibold text-center capitalize'>FormOne</h1>
      <form className='flex flex-col gap-4 mb-8 text-center' onSubmit={handleSubmit(onsubmit)}>

      <label className="w-full max-w-xs mx-auto form-control ">
          <div className="label">
            <span className="label-text ">Choose title</span>
            <span className="label-text-alt">Required</span>
          </div>
          <select {...register('title')} className="select select-bordered">
            <option disabled selected>Pick Title</option>
            <option value="Mr">Mr</option>
            <option value="Mrs">Mrs</option>
            <option value="Miss">Miss</option>
            <option value="Dr">Dr</option>
            
          </select>
          <div className="label">
            <span className="label-text-alt">{errors.title && <span className="text-red-600">{errors.title.message}</span>}</span>
            <span className="label-text-alt">Alt label</span>
          </div>
      </label>

        <label className="w-full max-w-xs mx-auto form-control">
            <div className="label">
              <span className="label-text">What is your name?</span>
              <span className="label-text-alt">Top Right label</span>
            </div>
            <input {...register('fullName')} type="text" placeholder="Type here" className="w-full max-w-xs input input-bordered" />
            <div className="label">
              <span className="label-text-alt">{errors.fullName && <span className="text-red-600">{errors.fullName.message}</span>}</span>
              <span className="label-text-alt">Bottom Right label</span>
            </div>
        </label>

        <label className="w-full max-w-xs mx-auto form-control">
          <div className="label">
            <span className="label-text">Pick the best fantasy franchise</span>
            <span className="label-text-alt">Alt label</span>
          </div>
          <select {...register('gender')} className="select select-bordered">
            <option disabled selected>Pick Gender</option>
            <option value='male'>male</option>
            <option value='female'>female</option>
            <option value='other'>other</option>
            
          </select>
          <div className="label">
            <span className="label-text-alt">{errors.gender && <span className="text-red-600">{errors.gender.message}</span>}</span>
            <span className="label-text-alt">Alt label</span>
          </div>
      </label>
      
      <label className="w-full max-w-xs mx-auto form-control">
          <div className="label">
            <span className="label-text">Pick the best fantasy franchise</span>
            <span className="label-text-alt">Alt label</span>
          </div>
          <select {...register('role')} className="select select-bordered">
            <option disabled selected>Pick Role</option>
            <option value="SD1">SD1</option>
            <option value="SD2">SD2</option>
            <option value="SD3">SD3</option>
            <option value="TeamLead">TeamLead</option>
            <option value="Manager">Manager</option>
            
          </select>
          <div className="label">
            <span className="label-text-alt">{errors.role && <span className="text-red-600">{errors.role.message}</span>}</span>
            <span className="label-text-alt">Alt label</span>
          </div>
      </label>

      
      

     

         
      <Controller
      name="age"
        control={control}
        
        render={({ field }) => (

          <label className="w-full max-w-xs mx-auto form-control">
            <div className="label">
              <span className="label-text">Enter your DOB</span>
              <span className="label-text-alt">Required</span>
            </div>
            
            <div className="mx-auto dropdown dropdown-bottom">
            <div tabIndex={0} role="button" className="btn btn-outline  w-[20rem]">
            {/* {selected? <p> {format(selected, 'PPP')}.</p>:<p className='flex gap-4 justify-items-stretch'>Date of birth <SlCalender/></p>} */}
            {field.value ? (
                        format(field.value, "PPP")
                      ) : (
                        <span className='flex gap-4 justify-items-stretch'>Pick a date <SlCalender/></span>
                      )}
            </div>
            <div tabIndex={0} className="dropdown-content z-[1] card card-compact max-w-xs p-0 shadow bg-primary text-primary-content">
              <div className="card-body">
              <DayPicker
                        // {...field}
                        mode="single"
                        captionLayout="dropdown-buttons"
                        fromYear={1915} toYear={2055}
                        selected={field.value}
                        onSelect={field.onChange}
                        
                        
                        // footer={footer}
                      />
                      
              </div>
            </div>
            
          </div>
            
            <div className="label">
              <span className="label-text-alt">{errors.age && <span className='text-red-600' >{errors.age.message}</span>}</span>
              
            </div>
          </label>

          
          
          
        )}
        />



      

      <input type='submit' className='w-full max-w-xs mx-auto font-medium input input-bordered hover:bg-primary hover:text-base-100'/>

      </form>

    </div>
  )
}

export default FormOne