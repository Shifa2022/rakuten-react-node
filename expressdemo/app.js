// express
// core library
// const fs = require('fs')
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

const Course = require('./model')

const app = express();

app.use(express.json())
app.use(cors());

const connectdB = async()=>{
    await mongoose.connect("mongodb://localhost/Coursedb")
    console.log("Connected to db")
}

connectdB();



// let courses = [
//     {title: "Angular", summary: "Framework from google!"},
//     {title: "React", summary: "Library from facebook!"}
// ]
app.get('/courses', async(req, res)=> {
    const courses = await Course.find();
    res.json(courses)
})

app.post('/courses', async (req, res)=> {

    const course = await Course.create(req.body)
    res.status(201).json(course)
})
app.listen(5000, ()=> console.log("server is running on 5000"))