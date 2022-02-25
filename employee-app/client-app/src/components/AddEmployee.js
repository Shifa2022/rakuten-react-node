import React, {useState} from 'react'
import Toast from 'react-bootstrap/Toast'
import ToastContainer from 'react-bootstrap/ToastContainer'

export default function AddEmployee() {

    const [name, setName] = useState('');
    const [designation, setDesignation] = useState('');
    const [salary, setSalary] = useState('');
    const [show, setShow] = useState(false);


    const addEmployee = () => {
        fetch('http://localhost:5000/employees', {
            method: 'POST',
            body: JSON.stringify({ name, salary, designation }),
            headers: {
                'content-type': 'application/json'
            }
        }).then(res => {
            console.log(res);
            return res.json()
        })
            .then(data => {
                setName('')
                setDesignation('')
                setSalary('')
                setShow(true);
            })
    }


    return (
        <div>
            <div
                aria-live="polite"
                aria-atomic="true"
                className="position-relative"
                style={{ minHeight: '150px' }}
            >
                <ToastContainer position="top-end" className="p-3">
                    <Toast onClose={() => setShow(false)} show={show} delay={10000} autohide bg="success">
                        <Toast.Header>
                            <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
                            <strong className="me-auto">Notification</strong>
                            <small>11 mins ago</small>
                        </Toast.Header>
                        <Toast.Body>Employee Added Successfully!</Toast.Body>
                    </Toast>
                </ToastContainer>
            </div>

            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">Name</span>
                <input type="text" onChange={(e) => setName(e.target.value)} value={name} className="form-control" placeholder="Enter name" aria-label="Username" aria-describedby="basic-addon1" />
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">Designation</span>
                <input type="text" onChange={(e) => setDesignation(e.target.value)} value={designation} className="form-control" placeholder="Enter designation" aria-label="Username" aria-describedby="basic-addon1" />
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">Salary</span>
                <input type="text" onChange={(e) => setSalary(e.target.value)} value={salary} className="form-control" placeholder="Enter salary" aria-label="Username" aria-describedby="basic-addon1" />
            </div>
            <div className="input-group mb-3">

                <button onClick={addEmployee} className='btn btn-primary'>Add Employee</button>
            </div>
        </div>
    )
  
}
