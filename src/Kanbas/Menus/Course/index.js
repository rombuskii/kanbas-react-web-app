import React from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import db from '../../Database'
import './index.css'

const CourseMenu = () => {
    const navigate = useNavigate();
    const {courseId} = useParams();
    const nav = db.courseNav
    console.log(courseId)
  return (
    <div className=''>
      <nav class="d-none d-xl-block navbar mx-0 px-0 bg-dark text-white">
            <div class="container-fluid d-flex justify-content-between align-items-center">
                <Link to={'/Kanbas/Menus/Burger'}><FontAwesomeIcon icon={'bars'} className="fa-solid burger-menu fa-lg fa-bars" style={{"color":"white"}}/></Link>
                <h6>Modules</h6>
                <span class="d-flex gap-2 align-items-center">
                    <FontAwesomeIcon icon={'glasses'} className="fa-solid fa-glasses"/>
                    <Link to={`/Kanbas/CourseMenu/${courseId}`} class="navbar-brand" ><FontAwesomeIcon icon={'chevron-down'} className="text-white fa-solid fa-chevron-down"/></Link>
                </span>
            </div>
      </nav>
      <div class="tiny-nav mb-0 list-group d-flex flex-column text-left" role="tablist">
        {nav.map((link, index) => (
            <Link key={index} to={`/Kanbas/Courses/${courseId}/${link}`} className='nav mb-3'>
            {link}
            </Link>      
        ))}
      </div>
      </div>
  )
}

export default CourseMenu