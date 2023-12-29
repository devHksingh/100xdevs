/*
A website which has 2 endpoints -
1.POST /signin
Body - {
username: string
password: string
}
Returns a json web token with username encrypted

2.GET /users
Headers -
Authorization header
Returns an array of all users if user is signed in (token is correct)
Returns 403 status code if not 
HS256
*/

const express = require('express');
const jwt = require('jsonwebtoken');
const fs = require('fs');

const privateKey = fs.readFileSync('./test.key')
console.log(String(privateKey));

const app = express()
const port = 5000

app.use(express.json())

const ALL_USERS = [
    {
      username: "harkirat@gmail.com",
      password: "123",
      name: "harkirat singh",
    },
    {
      username: "raman@gmail.com",
      password: "123321",
      name: "Raman singh",
    },
    {
      username: "priya@gmail.com",
      password: "123321",
      name: "Priya kumari",
    },
  ];


// Synchronous Sign 
// const token = jwt.sign({foo:'bar'},privateKey,{algorithm:'HS256',expiresIn:'5m'})
// setTimeout(()=>{
//     console.log(token);
    
// },2000)


// Sign asynchronously
// let tokenAsy
// jwt.sign({foo:'bar'},privateKey,{algorithm:'HS256'},function(err,token){
//       tokenAsy = token
//       console.log(tokenAsy);
// })

// verify a token symmetric - asynchronous
// jwt.verify(token,privateKey,function(err,decoded){
//     if(err){
//         console.log(err);
//     }else{
//         console.log(decoded.foo);
//     }
    
// })


function userExists(username,password){
    return  ALL_USERS.find((ele)=>ele.username ===username && ele.password ===password)
}


app.post('/api/signin',(req,res)=>{
    const name = req.body.username
    const password = req.body.password
    if(!userExists(name,password)){
        return res.status(403).json({
            msg:`User: ${name}, is not found `
        })
    }
    const token = jwt.sign({username:name},privateKey,{algorithm:'HS256',expiresIn:'1h'})
    return res.json({
        token,
    })
})

app.get('/api/users',(req,res)=>{
    const token = req.headers.authorization
    
    try {
        const decoded = jwt.verify(token,privateKey)
        const decodedUsername = decoded.username
        console.log(decodedUsername);
        let displayInfo = ALL_USERS.filter((ele)=>ele.username !==decodedUsername)
        res.json({
            decodedUsername,
            displayInfo
        })
        
    } catch (error) {
        res.json({
            err:error
        })
    }

    
})



app.listen(port,()=>{console.log(`Server is started at port ${port}`);})