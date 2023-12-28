const cors = require('cors');
const express = require('express');

const app = express()
const port =3004

app.use(cors())

app.get('/api/test',function(req,res,next){
    res.json({"msg":"This is CORS-enabled for all origins!"})
})

app.listen(port,()=>{
    console.log('CORS-enabled web server listening on port 80')
})
