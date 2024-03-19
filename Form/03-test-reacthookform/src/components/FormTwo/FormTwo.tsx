
import {useForm,SubmitHandler} from 'react-hook-form'
import { Input } from '../ui/input'
import { Label } from '@radix-ui/react-label'
enum GenderEnum {
    female='female',
    male= 'male',
    other= 'other'
}

enum TitleEnum {
    Mr='Mr',
    Mrs='Mrs',
    Miss='Miss',
    Dr='Dr'
}

enum RoleEnum {
    SD1='SD1',
    SD2='SD2',
    SD3='SD3',
    TeamLead='TeamLead',
    Manager='Manager',
}

interface IFormInput {
    title:TitleEnum
    firstName: string
    gender: GenderEnum
    Lastname:string
    Email:string
    Role:RoleEnum
    Mobilenumber:string
    
    Developer:string
  }


/*

*/ 

function FormTwo() {
    const {register,handleSubmit,formState:{errors}} = useForm<IFormInput>()
    const onSubmit: SubmitHandler<IFormInput> = (data)=>console.log(data);
    
  return (
    <div className='bg-slate-400'>
        <h1>FormTwo</h1>
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col '>
            <label>Tittle</label>
            <select {...register('title')}>
                <option value="Mr">Mr</option>
                <option value="Mrs">Mrs</option>
                <option value="Miss">Miss</option>
                <option value="Dr">Dr</option>
            </select>
            {errors.title && <span>{errors.title.message}</span>}
            <label>First Name:</label>
            <input {...register('firstName')} placeholder='First name'/>
            {errors.firstName && <span>{errors.firstName.message}</span>}
            <label>Last Name:</label>
            <input {...register('Lastname')}  placeholder='Last name'></input>
            {errors.Lastname &&  <span>{errors.Lastname.message}</span>}
            <label>Gender</label>
            <select {...register('gender')}>
                <option value='Male'>Male</option>
                <option value='Female'>Female</option>
                <option value='Other'>Other</option>
            </select>
            {errors.gender && <span>{errors.gender.message}</span>}
            <label>Email</label>
            {/* <input {...register('Email')}></input> */}
            <Input {...register('Email')} placeholder='Email'></Input>
            {errors.Email && <span>{errors.Email.message}</span> }
            <Label>Role:</Label>
            <select {...register('Role')}>
                <option value='SD1'>SD1</option>
                <option value='SD2'>SD2</option>
                <option value='SD3'>SD3</option>
                <option value='TeamLead'>TeamLead</option>
                <option value='Manager'>Manager</option>
            </select>
            {errors.Role && <span>{errors.Role.message}</span>}
            <label>Mob Number:</label>
            <input {...register('Mobilenumber')}></input>
            {errors.Mobilenumber && <span>{errors.Mobilenumber.message}</span>}
            <label>Devloper</label>
            <input {...register('Developer',{required:true})} type='radio' value='Yes'/>yes
            <input {...register("Developer", { required: true })} type="radio" value="No" />

            <input type="submit" />
        </form>
    </div>
  )
}

export default FormTwo