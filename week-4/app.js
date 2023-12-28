// const bodyParser = require('body-parser');
const bodyParser = require('body-parser');
const express = require('express');
const port =3000;

const app = express()

app.use(bodyParser.json())
app.use(express.static('public'))

app.post('/calculate-sum',(req,res)=>{
    const num1 = parseInt(req.body.num1)
    const num2 = parseInt(req.body.num2)

    const sum = num1+num2
    res.json({sum})
})



app.listen(port,()=>{
    console.log(`Server is started at port ${port}`);
})

