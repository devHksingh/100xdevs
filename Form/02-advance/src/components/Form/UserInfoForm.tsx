// import React from 'react'

import { useAppDispatch, useAppSelector } from "@/app/hooks"
import {Controller, useForm} from 'react-hook-form'
import { zodResolver } from "@hookform/resolvers/zod"
import Select from 'react-select';
import  {z}  from "zod"
import { Label } from "@radix-ui/react-dropdown-menu"
import { Button } from "../ui/button"
import { ChevronRightIcon } from "lucide-react"
import { nextFormStep, setFormData } from "@/features/form/formSlice"
import { BasicFormSchema, UserFormWithBasic } from "@/models/UserForm-model"

// ['Mr','Mrs','Miss','Dr'] as const

const titleOption = [
    {value:'Mr',label:'Mr'},
    {value:'Mrs',label:'Mrs'},
    {value:'Miss',label:'Miss'},
    {value:'Dr',label:'Dr'},
]
// const USERROLE = ['SD1','SD2','SD3','TeamLead','Manager'] as const

const USERROLE =[
    {value:'SD1',label:'SD1'},
    {value:'SD2',label:'SD2'},
    {value:'SD3',label:'SD3'},
    {value:'TeamLead',label:'TeamLead'},
    {value:'Manager',label:'Manager'},
]

function UserInfoForm() {

    // const formState = useAppSelector((state)=> state.form.formData)
    
    // const schema = z.object({
    //     firstName: z
    //                  .string().trim() 
    //                 .min(2,{message:'Name must be 2 or more characters long'}),
    //     lastName: z
    //              .string().trim() 
    //              .min(2,{message:'Name must be 2 or more characters long'}),
    //     title:  z.enum(USERTITLE),
    //     role: z.enum(USERROLE),
    //     id: z.number().int().positive().min(2).optional()
    // })
    // const {register,handleSubmit} = useForm({
    //     resolver:zodResolver(schema)
    // })

    // // function handleNextBtn(data){
    // //     console.log(data);
        
    // // }

    // const onsubmit =(data)=>{
    //     useAppDispatch(setFormData(data))
    //     useAppDispatch(nextFormStep())

    // }

    const { register,control, handleSubmit, formState:{errors,isValid}} = useForm<UserFormWithBasic>({
        resolver: zodResolver(BasicFormSchema)
    })

    const onSubmit = (data)=>{
        console.log('hi')
        console.log('basic form data',data );
        
    }
    
  return (
    <div>
        <h2 className="mb-4">UserInfoForm</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
            <label htmlFor="title">Title</label>
            
            {/* <select name="title" className="text-black">
                <option value="Mr">Mr</option>
                <option value="Mrs">Mrs</option>
                <option value="Miss">Miss</option>
                <option value="Dr">Dr</option>
            </select> */}

            {/* <Controller
                name="formData.title"
                control={control}
                render={({field})=>{
                    return (
                        <Select 
                          {...field}
                          options = {[{value:'Mr',label:'Mr'},{value:'Mrs',label:'Mrs'},
                          {value:'Miss',label:'Miss'},
                          {value:'Dr',label:'Dr'},]}
                          placeholder="Select title"
                        />
                    )
                }}
            >
                
            </Controller> */}
            <Controller
        control={control}
        name="formData.title"
        render={({ field }) => (
          <Select
            {...field} // Spread field props to React Select
            value={field.value}
            options={titleOption}
            onChange={(selectedOption) => field.onChange(selectedOption.value)}
          />
        )}
      />

            {errors.formData?.title && <p className="bg-yellow-100 text-red-500 italic px-2 py-1 rounded-md self-start">
                        {errors.formData.title?.message}
                    </p>}
            <Label >Frist Name:</Label>
            <input className="text-black" {...register('formData.firstName',{ required:true})}/>
            {errors.formData?.firstName && <p className="bg-yellow-100 text-red-500 italic px-2 py-1 rounded-md self-start">
                        {errors.formData.firstName?.message}
                    </p>}
            <Label >Last Name:</Label>
            <input className="text-black" {...register('formData.lastName',{ required:true})}/>

            {errors.formData?.lastName && <p className="bg-yellow-100 text-red-500 italic px-2 py-1 rounded-md self-start">
                        {errors.formData.lastName?.message}
                    </p>}
            {/* <Label>title</Label> */}
            

            <label htmlFor="role">Role</label>
            
            <select name="role" className="text-black">
                <option value="SD1">SD1</option>
                <option value="SD2">SD2</option>
                <option value="SD3">SD3</option>
                <option value="TeamLead">TeamLead</option>
                <option value="Manager">Manager</option>
            </select>

            {errors.formData?.role && <p className="bg-yellow-100 text-red-500 italic px-2 py-1 rounded-md self-start">
                        {errors.formData.role?.message}</p>}
            

            <label htmlFor="website">website</label>
            <input className="text-black" id="website" {...register('formData.website')}></input>

            {errors.formData?.website && <p className="bg-yellow-100 text-red-500 italic px-2 py-1 rounded-md self-start">
                        {errors.formData.website?.message}</p>}

            
            {/* <Button type="submit" variant='outline' size='icon' >hi
                <ChevronRightIcon className="h-4 w-4"/>
            </Button> */}
            <button type="submit" className="text-3xl bg-gray-600 p-2 rounded-md max-w-[10rem]">
                    Submit
                </button>
        </form>
        
    </div>
  )
}

export default UserInfoForm