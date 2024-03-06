import {configureStore} from '@reduxjs/toolkit'
import postsReducer from '../features/Posts/PostSlice'
import usersReducer from '../features/users/usersSlice'

export const store = configureStore({
    reducer:{
       posts: postsReducer,
       users: usersReducer,
    }
})