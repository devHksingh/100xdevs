import {z} from 'zod'
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { title } from 'process';

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
//   import { toast } from "@/components/ui/use-toast"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover"

  import { Calendar } from "@/components/ui/calendar"
  import { cn } from "@/lib/utils"
  import { format } from "date-fns"
import { CalendarIcon } from '@radix-ui/react-icons';
//   import { CalendarIcon } from "lucide-react"




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
    gender: z.enum(['Male','Female','Other']),
    role: z.enum(['SD1','SD2','SD3','TeamLead','Manager']),
    age: z.date({
        required_error: "Please select DOB",
        invalid_type_error: "That's not a date!",
    })

})

function ShadcnForm() {
      // 1. Define your form.
    const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    // defaultValues: {
    //     title: "Mr",
    //     fullName:'',
    //     gender: 'Male',
    //     role: 'SD2',
    //     age:new Date
    // },
  })
  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof schema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }
  return (
    
    <>
    {/* nav bar */}
    <div className="navbar bg-base-100 top-0 z-50">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>Item 1</a></li>
        <li>
          <a>Parent</a>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li><a>Item 3</a></li>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">Form</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><a>Item 1</a></li>
      <li>
        <details>
          <summary>Parent</summary>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </details>
      </li>
      <li><a>Item 3</a></li>
    </ul>
  </div>
  <div className="navbar-end gap-4">
    <a className="btn">Resgister</a>

    <label className="swap swap-rotate">
  
  {/* this hidden checkbox controls the state */}
  <input type="checkbox" className="theme-controller" value="luxury" />
  
  {/* sun icon */}
  <svg className="swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/></svg>
  
  {/* moon icon */}
  <svg className="swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/></svg>
  
</label>
  </div>
</div>
{/* nav bar end here */}
{/* Divider */}
<div className="flex flex-col w-full lg:flex-row mt-12">
  <div className="grid flex-grow h-auto card  rounded-box place-items-center p-2">
        <ul className="steps">
        <li className="step step-info">Info</li>
        <li className="step step-info">Address</li>
        <li className="step step-info">Grab the moon</li>
        <li className="step step-error" data-content="?">Sit on toilet</li>
        </ul>
    </div> 
  <div className="divider divider-accent lg:divider-horizontal"></div> 
  <div className="grid flex-grow h-auto card bg-base-300 rounded-box place-items-center">
        <div className="flex w-full">
        <div className="grid h-auto flex-grow card bg-base-300 rounded-box place-items-center">
            <div>
                <div className="radial-progress" style={{"--value":70}}     role="progressbar">70%</div>

            </div>
        </div>
        <div className="divider divider-horizontal"></div>
        <div className="grid h-auto flex-grow card bg-base-300 rounded-box place-items-center">
            <h1>Form</h1>

            {/* shadcn form */}
            <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
      <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a verified email to display" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                    
                  <SelectItem value="Mr">Mr</SelectItem>
                  <SelectItem value="Mrs">Mrs</SelectItem>
                  <SelectItem value="Miss">Miss</SelectItem>
                  <SelectItem value="Dr">Dr</SelectItem>
                </SelectContent>
              </Select>
              <FormDescription>
                You can manage email addresses in your{" "}
                <a href="/examples/forms">email settings</a>.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
      <FormField
          control={form.control}
          name="gender"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Gender</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your gender" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                    {/* 'Mr','Mrs','Miss','Dr' */}
                  <SelectItem value="Male">Male</SelectItem>
                  <SelectItem value="Female">Female</SelectItem>
                  <SelectItem value="Other">Other</SelectItem>
                  
                </SelectContent>
              </Select>
              <FormDescription>
                You can manage email addresses in your{" "}
                <a href="/examples/forms">email settings</a>.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="fullName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

<FormField
          control={form.control}
          name="role"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Role</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your Role" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                    {/* 'SD1','SD2','SD3','TeamLead','Manager' */}
                  <SelectItem value="SD1">SD1</SelectItem>
                  <SelectItem value="SD2">SD2</SelectItem>
                  <SelectItem value="SD3">SD3</SelectItem>
                  <SelectItem value="TeamLead">TeamLead</SelectItem>
                  <SelectItem value="Manager">Manager</SelectItem>
                  
                </SelectContent>
              </Select>
              <FormDescription>
                You can manage email addresses in your{" "}
                <a href="/examples/forms">email settings</a>.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="age"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Date of birth</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-[240px] pl-3 text-left font-normal bg-transparent",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value ? (
                        format(field.value, "PPP")
                      ) : (
                        <span>Pick a date</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50 " />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    captionLayout="dropdown-buttons" fromYear={1915} toYear={2085}
                    
                    // className='bg-transparent'
                    className='rounded-lg bg-slate-400 FormTest'
                    selected={field.value}
                    onSelect={field.onChange}
                    // disabled={(date) =>
                    //   date > new Date() || date < new Date("1900-01-01")
                    // }
                    
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              <FormDescription>
                Your date of birth is used to calculate your age.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>


        </div>
        </div>
  </div>
</div>


    </>
  )
}

export default ShadcnForm

/*
ui
steps,Timeline


*/