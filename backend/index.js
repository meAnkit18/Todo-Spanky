import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import todoroute from './routes/todo.route.js'
import userroute from './routes/user.route.js'


dotenv.config()
const app = express()
app.use(cors());
const PORT = process.env.PORT
const DB_URL = process.env.MONGODBURL



try{
await mongoose.connect(DB_URL)
console.log("Connected to MongoDB");

}catch(error){
    console.log(error);
    
}


app.use(express.json())
app.use("/todo",todoroute)
app.use("/user",userroute)

app.get("/",(req,res)=>{
    res.send("Hello Spanky.....!!!!!")
})

app.listen(PORT,()=>{
    console.log("App is listining at 3000");
    
})