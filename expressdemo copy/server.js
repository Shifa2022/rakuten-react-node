const express = require('express')

const app = express()

const port = 4000
courses = [];

app.use(express.json())

app.post('/courses', (req, res)=>{
    courses.push(req.body);
    res.status(201);
    res.send("Course is sucessfully created");
} )


app.get('/courses', (req, res)=>{
    res.json(courses)
})
// app.get('/hello', (req, res)=>{
//     res.send("HEllo World");
// })

app.listen(port, ()=>{
    console.log(`Server is listening on port ${port}`)
})