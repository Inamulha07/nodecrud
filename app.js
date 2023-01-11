const { json } = require('express');
const express =  require('express');
const app = express();


app.use((req,res,next)=>{
    console.log("app is running");
    res.status(200).json({
        message: "app is running"
    })
})

module.exports = app;