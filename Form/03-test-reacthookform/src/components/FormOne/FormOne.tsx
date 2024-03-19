// import React from 'react'
import { useForm, SubmitHandler } from "react-hook-form"

enum GenderEnum {
    female = "female",
    male = "male",
    other = "other",

  }
  
  interface IFormInput {
    firstName: string
    gender: GenderEnum
    Lastname:string
    Email:string
    Mobilenumber:string
    Title:string
    Developer:string


  }

function FormOne() {
    const { register, handleSubmit } = useForm<IFormInput>()
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data)
  return (
    <div>FormOne

<form onSubmit={handleSubmit(onSubmit)} className="text-gray-400 flex gap-4 flex-col ">
      <label>First Name</label>
      <input {...register("firstName")} className="bg-gray-800 "/>
      <label>Gender Selection</label>
      <select {...register("gender")} className="bg-gray-800 ">
        <option value="female">female</option>
        <option value="male">male</option>
        <option value="other">other</option>
      </select>
      

      {/*  */}

      {/* <input type="text" placeholder="First name" {...register("Firstname", {required: true, maxLength: 80})} /> */}
      <input type="text" placeholder="Last name" {...register("Lastname", {required: true, maxLength: 100})} />
      <input type="text" placeholder="Email" {...register("Email", {required: true, pattern: /^\S+@\S+$/i})} />
      <input type="tel" placeholder="Mobile number" {...register("Mobilenumber", {required: true, minLength: 6, maxLength: 12})} />
      <select {...register("Title", { required: true })}>
        <option value="Mr">Mr</option>
        <option value="Mrs">Mrs</option>
        <option value="Miss">Miss</option>
        <option value="Dr">Dr</option>
      </select>

      <input {...register("Developer", { required: true })} type="radio" value="Yes" />
      <input {...register("Developer", { required: true })} type="radio" value="No" />
      <input type="submit" className="bg-gray-800 rounded-lg p-2 " />
    </form>
    </div>
  )
}

export default FormOne