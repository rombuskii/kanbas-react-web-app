import { Link } from "react-router-dom";
import './index.css'
import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Dashboard = ({courses, course, setCourse, addNewCourse,
    deleteCourse, updateCourse }) => {
  return (
    <>
    <h2>Dashboard</h2>
    <hr/>
    <div class="container">
      <form className="d-flex flex-column gap-3">
      <h5><b>Add New Course</b></h5>
      <input value={course.name} onChange={e => setCourse({...course, name: e.target.value})} className="form-control" />
      <input value={course.number} onChange={e => setCourse({...course, number: e.target.value})} className="form-control" />
      <input value={course.startDate} onChange={e => setCourse({...course, startDate: e.target.value})} className="form-control" type="date" />
      <input value={course.endDate} onChange={e => setCourse({...course, endDate: e.target.value})} className="form-control" type="date" />
      <button className="btn btn-primary" onClick={addNewCourse} >
        Add
      </button>
      </form>
      <hr />
        <h4>Published Courses ({courses.length})</h4>
        <hr/>
        <div class="d-flex flex-row flex-wrap">
        {courses.map((course) => (
          <Link key={course._id} to={`/Kanbas/Courses/${course._id}`} className="link">
            <div class="card" style={{"width": "260px"}}>
                <img src="./images/gray.png" height="150px" class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title text-truncate">{course.number} {course.name}</h5>
                    <h6 class="card-text text-truncate">{course._id}</h6>
                    <p class="card-text text-truncate">{course._id} 2023 Spring Semester</p>
                    <FontAwesomeIcon icon='newspaper'/>
                    <i class="fa-solid fa-newspaper"></i>
                </div>
                <div className="d-flex gap-2 card-footer">
                <button
              onClick={(event) => {
                event.preventDefault();
                setCourse(course);
              }} className="btn btn-secondary">
              Edit
            </button>
            <button className="btn btn-warning" onClick={(event) => {
              event.preventDefault();
              updateCourse(course);
              }} >
              Update
            </button>

                <button
              onClick={(event) => {
                event.preventDefault();
                deleteCourse(course);
              }} className="btn btn-danger">
              Delete
            </button>

                </div>
            </div>
          </Link>
        ))}
        </div>
    </div>
    </>
  )
}

export default Dashboard