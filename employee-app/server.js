const express = require('express')
const app = express();

const cors = require('cors')
const mongoose = require('mongoose')
const Employee = require('./models/employee')

//middlewares
app.use(express.json());
app.use(cors());
app.use(express.static('client-app/build'))

// connect to db
const connectdB = async()=>{
    await mongoose.connect("mongodb://localhost/Coursedb")
    console.log("Connected to db")
}
connectdB();



// routes
app.get('/employees', async(req, res)=> {
    const employees = await Employee.find();
    res.json(employees)
})

app.get('/employees/:id', async(req, res)=> {
    const employee = await Employee.findById(req.params.id);
    res.json(employee)
})

app.post('/employees', async (req, res)=> {
    const employee = await Employee.create(req.body)
    res.status(201).json({success: true})
})

// delete and update
app.delete('/employees/:id', async (req, res)=> {
    await Employee.findByIdAndDelete(req.params.id)
    res.json({})
})

app.patch('/employees/:id', async (req, res)=> {
    const employee= await Employee.findByIdAndUpdate(req.params.id, req.body);
    res.json(employee)
})




// listen on server
app.listen(5000, ()=> console.log("server is running on 5000"))

