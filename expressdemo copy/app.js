// express
// core library
// const fs = require('fs')
const express = require('express')
const cors = require('cors')

const app = express();

app.use(express.json())
app.use(cors());

let courses = [
    {title: "Angular", summary: "Framework from google!"},
    {title: "React", summary: "Library from facebook!"}
]
app.get('/courses', (req, res)=> {
    res.json(courses)
})

app.post('/courses', (req, res)=> {
    let course = req.body
    courses.push(course);
    res.status(201).json(courses)
})
app.listen(5000, ()=> console.log("server is running on 5000"))