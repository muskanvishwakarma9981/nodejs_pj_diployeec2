const express = require("express");

const app = express();


app.get('/api/getapi', (req, res)=>{
    res.send({message:"hello get api"})
})

app.listen(8000, ()=>{
    console.log('serevre is running')
})