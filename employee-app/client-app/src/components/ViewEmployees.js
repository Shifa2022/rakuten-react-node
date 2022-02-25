import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom';

export default function ViewEmployees() {

    // state for storing employees array
    const [employees, setEmployees] = useState([])
    

    // on load of component fetch employees from server
    // & assign to employees array
    useEffect(() => {
      fetch('http://localhost:5000/employees')
      .then(res=>res.json())
      .then(data=> {
          setEmployees(data);
      })
    }, [])
    
    const deleteEmployee = (id)=>{
      fetch('http://localhost:5000/employees/' + id, {
          method: 'DELETE'
      })
      .then(res=>res.json())
      .then(data=> {
         console.log(data);
      })
    }

    let employeesList = employees.map((employee, i)=> {
        return (
            <tr key={employee._id}>
            <th scope="row">{i + 1}</th>
            <td><Link to={'update/' + employee._id + '/' + employee.name}>{employee.name}</Link></td>
            <td>{employee.salary}</td>
            <td>{employee.designation}</td>
            <td><button onClick={()=> deleteEmployee(employee._id)} className='btn btn-danger'> X </button></td>
          </tr>
        )
    })

    // display in a tabular format

  return (
    <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Salary</th>
      <th scope="col">Designation</th>
      <th scope="col">Actions</th>
    </tr>
  </thead>
  <tbody>
   
    {employeesList}
    
  </tbody>
</table>
  )
}
