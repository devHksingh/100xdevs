import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// enum

export const STATUSES = Object.freeze(
    {
        IDLE :'idle',
        ERROR: 'error',
        LOADING: 'loading',
    }
)



const productSlice = createSlice({
    name:'product',
    initialState:{
        data:[],
        status: STATUSES.IDLE,
    },
    reducers:{
        // setProducts(state,action){
            // // this is use on old version of Thunk
        //     // Do not call API/async fn inside reducer NEVER Bcz reducer is sync call : Use Thunk middleware
        //     state.data = action.payload
        // },
        // setStatus(state,action){
        //     state.status = action.payload
        // }
    },
    // extraReducers:(builder)=>{
    //     builder
    //           .addCase(fetchProducts.pending,(state)=>{
    //                 state.status =STATUSES.LOADING
    //           })
    //           .addCase(fetchProducts.fulfilled,(state,action)=>{
    //             state.status = STATUSES.IDLE
    //             state.data = action.payload
    //           })
    //           .addCase(fetchProducts,(state)=>{
    //             state.status = STATUSES.ERROR
    //           })
    // }
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state, action) => {
                state.status = STATUSES.LOADING;
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.data = action.payload;
                state.status = STATUSES.IDLE;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.status = STATUSES.ERROR;
            });
    },
})

export const {setProducts,setStatus} = productSlice.actions
export default productSlice.reducer

// Thunks

// old version
// export function fetchProducts(){
//     return async function fetchProductThunk(dispatch,getState){
//         dispatch(setStatus(STATUSES.LOADING))
//         try {
//             const productsData = await axios.get('https://fakestoreapi.com/products')
//             dispatch(setProducts(productsData.data))
//             dispatch(setStatus(STATUSES.IDLE))
//         } catch (error) {
//             dispatch(setStatus(STATUSES.ERROR))
//             console.log(`error: ${error}`);
//         }
//     }
// }

// new version :reduxToolkit

// export const fetchProducts = createAsyncThunk(identifyer,async fnc)

export const fetchProducts = createAsyncThunk('product/fetch',async()=>{
    const productsData = await axios.get('https://fakestoreapi.com/products')
    return productsData.data
})