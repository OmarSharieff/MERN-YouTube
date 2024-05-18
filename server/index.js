import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
const app = express();
dotenv.config();
const PORT = process.env.PORT;

const DB_URL = process.env.CONNECTION_URL;
mongoose.connect(DB_URL,{useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>console.log("MongoDB database connected"))
.catch((err)=>console.log(err));

app.get("/",(req,res)=> {
  res.send("Hey!")
});

app.listen(PORT,()=> {
  console.log(`Server listening at ${PORT}`);
});
