const mongoose = require('mongoose')

const Schema = mongoose.Schema

const EmployeeSchema = new Schema({
    name: String,
    salary: Number,
    designation: String
})

const Employee = mongoose.model('Employee', EmployeeSchema)

module.exports = Employee;