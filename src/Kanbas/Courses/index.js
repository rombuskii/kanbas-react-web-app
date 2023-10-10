import React from 'react'
import db from '../Database'
import {Navigate, Route, Routes, Link, useParams, useLocation } from 'react-router-dom'
import CourseNavigation from './CourseNavigation'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.css'
import Home from './Home'
import Assignments from './Assignments'
import Modules from './Modules'
import AssignmentEditor from './Assignments/AssignmentEditor'
import Grades from './Grades'

const Courses = () => {
    const { courseId } = useParams();
    let location = useLocation();
    let section = location.pathname.split('/').indexOf(courseId) + 1
    section = location.pathname.split('/')[section]
    if(section.includes('%20')) {
        section = section.split('%20')
        section = section.join(" ")
    }
    const course = db.courses.find((course) => course._id === courseId);
  return (
    <>
    <div class="container pt-3">
        <div class="d-flex d-none d-xl-flex justify-content-between align-items-baseline">
            <div class="d-flex align-items-baseline gap-4">
                <Link className='anchor'><FontAwesomeIcon icon={'bars'}/></Link>
                    <nav style={{"--bs-breadcrumb-divider": '>'}} aria-label="breadcrumb">
                        <ol class="breadcrumb">
                          <li class="breadcrumb-item"><span className='anchor' href="#">{course.number} SP23</span></li>
                          <li class="breadcrumb-item" aria-current="page">&gt; {section}</li>
                        </ol>
                    </nav>
                    </div>
                    <button href="#" className="btn btn-secondary"><FontAwesomeIcon className='px-2' icon='glasses'/>Student View</button>
                    </div>
                    <hr class="d-none d-xl-flex"/>
    <div className='row'>
    <CourseNavigation/>
    <Routes>
        <Route path="/" element={<Navigate to="Home" />} />
        <Route path="Home" element={<Home/>} />
        <Route path="Modules" element={<Modules />} />
        <Route path="Assignments" element={<Assignments/>} />
        <Route
              path="Assignments/:assignmentId"
              element={<AssignmentEditor/>}
              />
        <Route path="Grades" element={<Grades/>} />
    </Routes>
    </div>
    </div>
    </>
  )
}

export default Courses