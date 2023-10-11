import React from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import db from '../../Database'
const CourseMenu = () => {
    const navigate = useNavigate();
    const {courseId} = useParams();
    const nav = db.courseNav
  return (
    <>
    <nav class="d-xl-none navbar bg-dark text-white">
            <div class="container-fluid d-flex justify-content-between align-items-center">
                <Link to={'/Kanbas/Menus/Burger'}><FontAwesomeIcon icon={'bars'} className="fa-solid burger-menu fa-lg fa-bars" style={{"color":"white"}}/></Link>
                <h6>Modules</h6>
                <span onClick={() => navigate(-1)} className="d-flex exit gap-2 align-items-center">
                    <FontAwesomeIcon icon={'glasses'} className="fa-solid fa-glasses"/>
                    <span class="navbar-brand" ><FontAwesomeIcon icon={'chevron-down'} className="text-white fa-solid fa-chevron-down"/></span>
                </span>
            </div>
      </nav>
      <div class="tiny-nav mb-0 list-group d-flex flex-column text-left" role="tablist">
        {nav.map((link, index) => (
            <Link key={index} to={courseId ? `/Kanbas/Courses/${courseId}/${link}` : `/Kanbas/Dashboard`} className='nav mb-3'>
            {link}
            </Link>      
        ))}
      </div>
      </>
  )
}

export default CourseMenu