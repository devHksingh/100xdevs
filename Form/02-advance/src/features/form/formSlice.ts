import { FormSchema } from "@/models/UserForm-model";
import { createSlice } from "@reduxjs/toolkit";



const initialState:FormSchema ={
    currentStep:1,
    fromError:'',
    stepOneForm:{
        isCompleted:false
    },
    stepTwoForm:{
        isCompleted:false
    },
    stepThreeForm:{
        isCompleted:false
    },
    formData:{
        firstName:'',
        lastName:"",
        email  :'',
        phone : 99,
        website :'',
        title :'Mr',
        role :'SD1',
        userPassword:{
            password:'',
            confirmPassword:''
        },
        address:{
            street:'',
            city:'',
            state:'',
            zipcode:''
        },
        id:23,
    }
}

export const formSlice = createSlice({
    name:'newUserForm',
    initialState,
    reducers:{
        nextFormStep:(state)=>{
            state.currentStep += 1;
        },
        prevFormStep:(state)=>{
            state.currentStep -=1
        },
        isFormOne:(state)=>{
            state.stepOneForm.isCompleted = true;
        },
        isFormTwo:(state)=>{
            state.stepTwoForm.isCompleted =true
        },
        isFormThree:(state)=>{
            state.stepThreeForm.isCompleted =true
        },
        setFormError:(state,action)=>{
            state.fromError= action.payload
        },
        setFormData:(state,action)=>{
            state.formData = action.payload
        }

    }
})

export const {nextFormStep,prevFormStep,isFormOne,isFormTwo,isFormThree,setFormError,setFormData} = formSlice.actions

export default formSlice.reducer