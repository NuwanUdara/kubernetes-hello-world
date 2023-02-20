const express = require('express')
// const { default: axios } = require('axios')
const home=require('./routes/home')

const app = express()
const port = 3000

app.use('/',home);


app.listen(port,()=>{
    console.log(`I am at port ${port}`);
})