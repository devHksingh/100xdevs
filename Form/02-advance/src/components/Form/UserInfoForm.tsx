// import React from 'react'

import { useAppDispatch, useAppSelector } from "@/app/hooks"
import {useForm} from 'react-hook-form'
import { zodResolver } from "@hookform/resolvers/zod"
import  {z}  from "zod"
import { Label } from "@radix-ui/react-dropdown-menu"
import { Button } from "../ui/button"
import { ChevronRightIcon } from "lucide-react"
import { nextFormStep, setFormData } from "@/features/form/formSlice"


function UserInfoForm() {

    const formState = useAppSelector((state)=> state.form.formData)
    const USERTITLE = ['Mr','Mrs','Miss','Dr'] as const
    const USERROLE = ['SD1','SD2','SD3','TeamLead','Manager'] as const
    const schema = z.object({
        firstName: z
                     .string().trim() 
                    .min(2,{message:'Name must be 2 or more characters long'}),
        lastName: z
                 .string().trim() 
                 .min(2,{message:'Name must be 2 or more characters long'}),
        title:  z.enum(USERTITLE),
        role: z.enum(USERROLE),
        id: z.number().int().positive().min(2).optional()
    })
    const {register,handleSubmit} = useForm({
        resolver:zodResolver(schema)
    })

    // function handleNextBtn(data){
    //     console.log(data);
        
    // }

    const onsubmit =(data)=>{
        useAppDispatch(setFormData(data))
        useAppDispatch(nextFormStep())
        
    }
    
  return (
    <div>
        <h2 className="mb-4">UserInfoForm</h2>

        <form onSubmit={handleSubmit(onsubmit)} className="flex flex-col gap-4">
            <label htmlFor="title">Title</label>
            
            <select name="title" className="text-black">
                <option value="Mr">Mr</option>
                <option value="Mrs">Mrs</option>
                <option value="Miss">Miss</option>
                <option value="Dr">Dr</option>
            </select>
            <Label >Frist Name:</Label>
            <input className="text-black" {...register('firstName',{ required:true})}/>
            <Label >Last Name:</Label>
            <input className="text-black" {...register('lastName',{ required:true})}/>
            {/* <Label>title</Label> */}
            

            <label htmlFor="role">Role</label>
            
            <select name="role" className="text-black">
                <option value="SD1">SD1</option>
                <option value="SD2">SD2</option>
                <option value="SD3">SD3</option>
                <option value="TeamLead">TeamLead</option>
                <option value="Manager">Manager</option>
            </select>
            

            <label htmlFor="id">User Id</label>
            <input className="text-black" {...register('id')}></input>

            
            <Button type="submit" variant='outline' size='icon' >
                <ChevronRightIcon className="h-4 w-4"/>
            </Button>
        </form>
        
    </div>
  )
}

export default UserInfoForm