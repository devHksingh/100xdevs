import {configureStore} from '@reduxjs/toolkit'
import postsReducer from '../features/Posts/PostSlice'
export const store = configureStore({
    reducer:{
       posts: postsReducer,
    }
})