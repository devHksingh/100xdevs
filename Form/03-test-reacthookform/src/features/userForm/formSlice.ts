import {createSlice} from '@reduxjs/toolkit'

import type { PayloadAction } from '@reduxjs/toolkit'

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


interface Form{
    // step:number
    // title:TitleEnum
    // fullName:string
    // gender:GenderEnum
    // role:RoleEnum
    // age:Date
    // street: string
    // pincode: number
    // userName:string
    // password:string
    // userId:string
    step:number
    info:{
        title:TitleEnum
        fullName:string
        gender:GenderEnum
        role:RoleEnum
        age:Date
    }
    addressInfo:{
        address:string
        street: string
        pincode: number
    }
    logInInfo:{
        userName:string
        password:string
        userId:string
    }

}

const initialState:Form = {
    step:1,
    info:{
        title:TitleEnum.Mr,
        fullName:'',
        gender:GenderEnum.male,
        role:RoleEnum.SD1,
        age: new Date(),
    },
    addressInfo:{
        address:'',
        street: '',
        pincode: 0
    },
    logInInfo:{
        userName: '',
        password: '',
        userId: '',
    }
    
}

export const formSlice = createSlice({
    name:'userForm',
    initialState,
    reducers:{
        incrementStep:(state,action:PayloadAction<number>)=>{
            state.step += action.payload
        },
        decrementStep:(state,action:PayloadAction<number>)=>{
            state.step -= action.payload
        },
        updateInfoForm:(state,action)=>{
            state.info = action.payload
        },
        updateAddressFrom:(state,action)=>{
            state.addressInfo =action.payload
        },
        updateLoginFrom:(state,action)=>{
            state.logInInfo =action.payload
        },


    }
})

export const{incrementStep,decrementStep,updateInfoForm,updateAddressFrom,updateLoginFrom} = formSlice.actions

export default formSlice.reducer