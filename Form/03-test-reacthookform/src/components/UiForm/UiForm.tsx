import { Controller, SubmitHandler, useForm } from "react-hook-form"
import { Label } from "../ui/label"
import { Input } from "../ui/input"
// import { useState } from "react"
// import { format } from 'date-fns';
// import { DayPicker } from 'react-day-picker';
// import {DayPicker} from 'react-day-picker';
// import 'react-day-picker/dist/style.css';
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";

// import { format } from "date-fns"
// import { Calendar as CalendarIcon } from "lucide-react"
 
// import { cn } from "@/lib/utils"
// import { Button } from "@/components/ui/button"
// import { Calendar } from "@/components/ui/calendar"
// import {
//   Popover,
//   PopoverContent,
//   PopoverTrigger,
// } from "@/components/ui/popover"
// import { Calendar } from "@/components/ui/calendar"
import { CalendarIcon } from "@radix-ui/react-icons"
import { format } from "date-fns"
import { cn } from "@/lib/utils"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Button } from "../ui/button";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";


interface FromThree {
    fullName:string
    age:Date
    message:string
    nextAge:Date
}
{/* <CalendarIcon/> */}


function UiForm() {
    const {control,register,handleSubmit,formState:{errors}} = useForm<FromThree>()
    const onSubmit:SubmitHandler<FromThree> = (data)=> console.log(data);
    
    // const [startDate, setStartDate] = useState<Date>()

  return (
    <div className="bg-slate-800 p-8">
        <h1>UiForm</h1>
        <form onSubmit={handleSubmit(onSubmit)} className=" flex flex-col gap-4 ">
            <Label>Full name:</Label>
            <Input {...register('fullName')} placeholder="Enter Full name"/>
            <Label>Age</Label>
            {/* <Input {...register('age') } placeholder='Age'/> */}

            <Popover>
              <PopoverTrigger>
                open
              </PopoverTrigger>
              <PopoverContent>

              <Controller
             name="age"
        control={control}
        render={({ field }) => (
    //       <DayPicker
    //         mode="single"
    //         selected={field.value}
    //         // onSelect={setSelected}
    //         // footer={footer}
    // />
            <DayPicker 
              mode="single"
              required
              onChange={(date:Date) => field.onChange(date)}
              selected={field.value}
            />
              )}
              />

              </PopoverContent>
            </Popover>

            <hr/>
            <Label>Next age</Label>
            <hr/>
            <Controller 
              name="nextAge"
              control={control}
              rules={{required:true}}
              render={({field})=>(
                <Popover>
                  <PopoverTrigger>
                    <Button 
                    variant={"outline"}
                    className={cn(
                      "w-[240px] pl-3 text-left font-normal bg-transparent hover:bg-transparent hover:text-gray-600",
                      !field.value && "text-muted-foreground"
                    )}
                    >
                        {field.value ? (
                        format(field.value, "PPP")
                      ) : (
                        <span>Pick a date</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0 flex flex-col" align="start">
                          {/* <DayPicker 
                            mode="single"
                            captionLayout="dropdown"
                            fromYear={2015} 
                            toYear={2025}
                            required
                            selected={field.value}
                            onSelect={field.onChange}
                            initialFocus
                            
                            // className=" bg-slate-700 p-6 rounded-lg  outline nav"
                            
                            
                          /> */}
                          {/* <Calendar
                           mode="single"
                          selected={field.value}
                          onSelect={field.onChange}
                          captionLayout="dropdown"
                          fromYear={1915} 
                          toYear={2025}
                          
                          
                          className="rounded-md  bg-slate-800 text-slate-400 "
                          classNames={{
                            container:''
                          }}
                          
                          /> */}

                          <DatePicker 
                            selected={field.value}
                            onSelect={field.onChange}
                            onChange={(date)=> console.log(date)
                            
                            }
                            showYearDropdown
                            
                          />

{/* <DatePicker
      showIcon
      selected={field.value}
      onChange={(date) => setStartDate(date)}
    /> */}

                  </PopoverContent>
                </Popover>
              )}
            />


<hr/>
<input type="submit" className="bg-gray-800 rounded-lg p-2 outline" />


            
  

        </form>

    </div>
  )
}

export default UiForm;


/*
https://stackoverflow.com/questions/60864610/is-it-possible-to-use-react-datepicker-with-react-hooks-forms

https://react-day-picker.js.org/

how to use react-day-picker with react hook form

selected={field.value}
            onDayClick={(day) => field.onChange(day)}
*/