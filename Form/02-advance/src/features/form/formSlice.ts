// import { FormSchema } from "@/models/UserForm-model";
import { UserFormComplete } from "@/models/UserForm-model";
import { createSlice } from "@reduxjs/toolkit";



const initialState:UserFormComplete ={
    formState:{
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
        }
    },

    formData:{
        firstName:'',
        lastName:"",
        phone : 99,
        website :'',
        title :'Mr',
        role :'SD1',
    },
    loginData:{
        email  :'',
        userPassword:{
            password:'',
            confirmPassword:''
        },
        userId:23,
    },
        
    address:{
            street:'',
            city:'',
            state:'',
            zipcode:''
        },
        
    }




export const formSlice = createSlice({
    name:'newUserForm',
    initialState,
    reducers:{
        nextFormStep:(state)=>{
            state.formState.currentStep += 1;
        },
        prevFormStep:(state)=>{
            state.formState.currentStep -=1
        },
        isFormOne:(state)=>{
            state.formState.stepOneForm.isCompleted = true;
        },
        isFormTwo:(state)=>{
            state.formState.stepTwoForm.isCompleted =true
        },
        isFormThree:(state)=>{
            state.formState.stepThreeForm.isCompleted =true
        },
        setFormError:(state,action)=>{
            state.formState.fromError= action.payload
        },
        setFormData:(state,action)=>{
            state.formData = action.payload
        },
        setFormLoginData:(state,action)=>{
            state.loginData = action.payload
        },
        setFormAddressData:(state,action)=>{
            state.address = action.payload
        }

    }
})

export const {nextFormStep,prevFormStep,isFormOne,isFormTwo,isFormThree,setFormError,setFormData,setFormLoginData,setFormAddressData} = formSlice.actions

export default formSlice.reducer