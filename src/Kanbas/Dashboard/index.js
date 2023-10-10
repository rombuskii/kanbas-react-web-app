import { Link } from "react-router-dom";
import db from "../Database";
import './index.css'
import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Dashboard = () => {
    const courses = db.courses;
  return (
    <>
    <h2>Dashboard</h2>
    <hr/>
    <div class="container">
        <h4>Published Courses ({courses.length})</h4>
        <hr/>
        <div class="d-flex flex-row flex-wrap">
        {courses.map((course) => (
          <Link key={course._id} to={`/Kanbas/Courses/${course._id}`} className="">
            <div class="card" style={{"width": "260px"}}>
                <img src="./images/gray.png" height="150px" class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title text-truncate">{course.number} {course.name}</h5>
                    <h6 class="card-text text-truncate">{course._id}</h6>
                    <p class="card-text text-truncate">{course._id} 2023 Spring Semester</p>
                    <FontAwesomeIcon icon='newspaper'/>
                    <i class="fa-solid fa-newspaper"></i>
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