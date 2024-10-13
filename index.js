import bodyParser from 'body-parser'
import express from 'express' 
import userRouter from './routes/usersRoute.js'
import mongoose from 'mongoose'

const app = express()
app.use(bodyParser.json())

const connectionString = "mongodb+srv://nadeesha:wmnm.nadee@cluster0.wet56.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(connectionString).then(
    ()=>{
        console.log("connected to the database")
    }
).catch(
    ()=>{
        console.log("connection fialed")
    }
) 

app.use("api/users",userRouter)

app.get("/",(req,res)=>{
    console.log("get request")
    res.json({
        message : "hi"
    })
})

app.post("/",(req,res)=>{
    const name = req.body.name

    const message = "hi " + name

    console.log("post request")
    res.json({
        message : message
    })
})

 
app.listen(5000, (req,res) => {
    console.log('Server is running on port 5000');
  });
/*
app.listen(5000,(req,res)=>{
    console.log("sever is running on port 5000")
}
);*/