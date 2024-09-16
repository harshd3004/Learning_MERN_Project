const express = require('express');

const app = express();

app.get('/',(req,res)=>{
    res.status(200).send("Hello world")
})

const port = 5000;
app.listen(port,()=>{
    console.log("Server is running on port : ",port);
})