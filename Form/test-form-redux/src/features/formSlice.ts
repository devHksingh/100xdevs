import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";




interface FormState {
    step : number
    formOne :{
        data:object
    }
    formTwo :{
        data:object
    }
    formThree :{
        data:object
    }
}

const initialState:FormState ={
    step:1,
    formOne:{
        data:{}
    },
    formTwo:{
        data:{}
    },
    formThree:{
        data:{}
    }

}


export const formSlice = createSlice({
    name:'form',
    initialState,
    reducers:{
        incrementFormStep:(state,action: PayloadAction<number>)=>{
            state.step +=  action.payload
        },
        decrementFormStep : (state,action : PayloadAction<number>)=>{
            state.step -= action.payload
        },
        addFormOneData: (state,action : PayloadAction<object>)=>{
            state.formOne.data = action.payload
        },
        addFormTwoData: (state,action:PayloadAction<object>)=>{
            state.formTwo.data = action.payload
        },
        addFormThreeData:(state,action:PayloadAction<object>)=>{
            state.formThree.data = action.payload
        }
    }
})

export const {incrementFormStep,decrementFormStep,addFormOneData,addFormTwoData,addFormThreeData} = formSlice.actions

export default formSlice.reducer