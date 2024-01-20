import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
// import { useParams } from 'react-router-dom'


function Github() {
    const data = useLoaderData()
    // const {username} = useParams()
    // const [data,setData] =useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/hiteshchoudhary')
    //     .then(response => response.json())
    //     .then(data=>{
    //         console.log(data);
    //         setData(data)
    //     })
    // }, [])
    
  return (
    <div className='text-center m-4 bg-slate-600 text-white p-4 text-4xl'>
        <h1>UserName :{data.name}</h1>
        {/* <img src=`{}` alt="" srcset="" /> */}
        <span>{data.avatar_url}</span>
        <img className='' src={data.avatar_url} alt="user pic" width={200}  />
    </div>
  )
}

export default Github

export const githubInfoLoder = async()=>{
    const response = await fetch('https://api.github.com/users/hiteshchoudhary')
    return response.json()
}