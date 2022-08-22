// https://www.youtube.com/watch?v=eYVGoXPq2RA&ab_channel=Telusko
const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const PORT = process.env.PORT;
const uri = process.env.URI;

const alienRouter = require("./routes/aliens");
const connect = async()=>{
    try{
        await mongoose.connect(uri);
        console.log("Connected to MongoDB");
    }catch(error){
        console.error(error);
    }
}
connect();
const app = express();
app.use('/aliens',alienRouter);
app.listen(PORT,()=>{
    console.log("Server started at PORT:9000");
});

