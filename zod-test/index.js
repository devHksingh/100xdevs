const express = require('express');
const {z} = require('zod')

const bodyParser = require('body-parser');
  
const app = express()
const port = 3005

app.use(bodyParser.json());

// basic zod

const UserSchema = z.object({
    username:z.string().min(3),
    age: z.number().gt(18).optional(),// to make optional 
    birthday: z.date(),
    isProgrammer: z.boolean().default(true),// set defaut value
    hobby: z.enum(["codding","guitar","random"])
})

const user = { username:"WDS",
                age:22,
                birthday: new Date(),
                isProgrammer: true,
}

console.log(UserSchema.parse(user));// throw an error 
console.log(UserSchema.safeParse(user));// throw an error with object have true/false


app.listen(port,()=>console.log(`Server is started at ${port}`))