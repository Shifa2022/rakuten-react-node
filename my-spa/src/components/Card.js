import React from 'react'

export default function Card(props) {

    const deleteCourse = () => {
        console.log('Deleting course .. ' + props.course.id);
        fetch('http://localhost:8000/courses/' + props.course.id,
        {
            method: "DELETE"
        })
        .then(res => res.json())
        .then( data => {
            console.log(data);
           
        })
    }

  return (
    <div className="card" style={{width: '18rem'}}>
  <img className="card-img-top" src="https://via.placeholder.com/150" alt="Card image cap"/>
  <div className="card-body">
    <h5 className="card-title">{props.course.title}</h5>
    <p className="card-text">{props.course.summary}</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
    <button onClick={deleteCourse} className="btn btn-danger"> X </button>
  </div>
</div>
  )
}
