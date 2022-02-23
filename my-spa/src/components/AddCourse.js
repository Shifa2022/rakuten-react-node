import React, {useState} from 'react'

export default function AddCourse() {

  const [title, setTitle] = useState('');
  const [summary, setSummary] = useState('');

  const addCourse = () => {
      fetch('http://localhost:8000/courses', {
          method: 'POST',
          body: JSON.stringify({title, summary}) ,
          headers: {
              'content-type': 'application/json'
          } 
      }).then(res=> {
          console.log(res);
          return res.json()
        })
      .then(data =>  {
          setTitle('')
          setSummary('')
      })
  }

  return (
    <div>
        <div class="input-group mb-3">
        <span class="input-group-text" id="basic-addon1">Title</span>
        <input type="text" onChange={(e)=> setTitle(e.target.value)}  value={title} class="form-control" placeholder="Enter title" aria-label="Username" aria-describedby="basic-addon1"/>
        </div>
        <div class="input-group mb-3">
        <span class="input-group-text" id="basic-addon1">Summary</span>
        <input type="text" onChange={(e)=> setSummary(e.target.value)}  value={summary} class="form-control" placeholder="Enter summary" aria-label="Username" aria-describedby="basic-addon1"/>
        </div>
        <div class="input-group mb-3">
           
            <button onClick={addCourse} className='btn btn-primary'>Add Course</button>
        </div>
    </div>
  )
}
