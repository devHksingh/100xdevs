import {createSlice} from '@reduxjs/toolkit'


const initialState = {
    FormData:{
        name:"",
        age:'',
        email:'',
        password:''
    },
    currentStep: 1,
    error:{}

}

export const formSlice = createSlice({
    name:'form',
    initialState,
    reducers:{
        setformData:(state,action)=>{
            state.FormData= {...state.FormData, ...action.payload}
        },
        nextStep:(state)=>{
            state.currentStep +=1
        },
        prevStep:(state)=>{
            state.currentStep -=1
        },
        resetForm:(state)=>{
            state.currentStep =1
            state.FormData =initialState.FormData
        },
        setError:(state,action)=>{
            state.error = action.payload
        },
        clearError:(state)=>{
            state.error ={}
        }
    }

})

export const {setformData,nextStep,prevStep,resetForm,setError,clearError} = formSlice.actions
export default formSlice.reducer

