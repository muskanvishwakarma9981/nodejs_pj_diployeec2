const express = require("express");
const app = express();

require("dotenv").config


app.get('/api/getapi', (req, res)=>{
    res.send({message:"hello get api"})
})

app.get('/api/get_user_details', (req, res)=>{
    res.send({
        user:{
            name:"muskan",
            age:23,
            contact:12344
        },
    env:process.env.NAME
    })
})

app.listen(process.env.PORT, ()=>{
    console.log('serevre is running')
})