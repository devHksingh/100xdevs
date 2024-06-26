import { createApi,fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const myApi = createApi({
    reducerPath:"api",
    baseQuery:fetchBaseQuery({
        baseUrl:"http://localhost:3000/"
    }),
    endpoints:(builder) =>({
        getPosts:builder.query<Post[],string>({query:()=> "posts"}),

        newPost:builder.mutation<Post.Post>({
            query:()=>({
                url:"pots",
                method:"POST",
                body:'post',
            })
        })
    }),

})

export const {useGetPostsQuery, useNewPostMutation} = myApi