import React, {useState} from 'react'
import { useParams, useNavigate } from "react-router-dom";

import Button from 'react-bootstrap/Button';
export default function UpdateEmployee() {
    let params = useParams();
    let navigate = useNavigate();
  const [name, setName] = useState(params.name);
  const [salary, setSalary] = useState('');

    console.log(params)

  const updateEmployee = () => {
      fetch('http://localhost:5000/employees/' + params.id, {
          method: 'PATCH',
          body: JSON.stringify({salary}) ,
          headers: {
              'content-type': 'application/json'
          } 
      }).then(res=> {
          console.log(res);
          if(res.status >= 400){
            console.log('Stay here and display a message')
          }
          else{
            navigate('/')
          }
        })
     
      .catch(err=>{
        console.log('In case of error' , err)
      })
  }

  return (
    <div>
        <div class="input-group mb-3">
        <span class="input-group-text" id="basic-addon1">Title</span>
        <input type="text"  value={name} disabled class="form-control" placeholder="Enter name" aria-label="Username" aria-describedby="basic-addon1"/>
        </div>
        <div class="input-group mb-3">
        <span class="input-group-text" id="basic-addon1">Salary</span>
        <input type="text" onChange={(e)=> setSalary(e.target.value)}  value={salary} class="form-control" placeholder="Enter salary" aria-label="Username" aria-describedby="basic-addon1"/>
        </div>
        <div class="input-group mb-3">
           
            <Button onClick={updateEmployee} variant='primary'>Update Employee</Button>
        </div>
    </div>
  )
}
