//import Nav from "../Nav";
import KanbasNavigation from "./KanbasNavigation";
import { Routes, Route, Navigate, Link, useLocation } from "react-router-dom";
import Dashboard from "./Dashboard";
import Account from "./Account";
import Courses from "./Courses";
import Calendar from "./Calendar";
import './index.css'
import { useState } from "react";
import db from '../Kanbas/Database'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CourseMenu from "./Menus/Course";
import store from "./store";
import { Provider } from "react-redux";

function Kanbas() {
  const [courses, setCourses] = useState(db.courses)
  const [course, setCourse] = useState({
    name: "New Course",      number: "New Number",
    startDate: "2023-09-10", endDate: "2023-12-15",
  });
  const addNewCourse = () => {
    setCourses([...courses, { ...course, _id: new Date().getTime().toString() }]);
  };
  const deleteCourse = (courseId) => {
    setCourses(courses.filter((course) => course._id !== courseId));
  };
  const updateCourse = () => {
    setCourses(
      courses.map((c) => {
        if (c._id === course._id) {
          return course;
        } else {
          return c;
        }
      })
    );
  };
  let id = 'RS101'
  const loc = useLocation();
  const locList = loc.pathname.split('/')
  if(locList.includes('Courses')) {
    const index = locList.indexOf('Courses') + 1
    id = locList[index]
  }
  
  return (
   <Provider store={store}>
   {/*<Nav/>*/}
   <nav class="d-xl-none navbar bg-dark text-white">
            <div class="container-fluid d-flex justify-content-between align-items-center">
                <Link to={'/Kanbas/Menus/Burger'}><FontAwesomeIcon icon={'bars'} className="fa-solid burger-menu fa-lg fa-bars" style={{"color":"white"}}/></Link>
                <h6>Modules</h6>
                <span class="d-flex gap-2 align-items-center">
                    <FontAwesomeIcon icon={'glasses'} className="fa-solid fa-glasses"/>
                    <Link to={`/Kanbas/CourseMenu/${id}`} class="navbar-brand" ><FontAwesomeIcon icon={'chevron-down'} className="text-white fa-solid"/></Link>
                </span>
            </div>
      </nav>
   <div class="container-fluid">
    <div className="row">
      <KanbasNavigation />
      <div class="col-10 col-xl-11">
      <Routes>
          <Route path="/" element={<Navigate to="Dashboard" />} />
          <Route path="Account/*" element={<Account/>} />
          <Route path="Dashboard" element={
          <Dashboard
          courses={courses}
          course={course}
          setCourse={setCourse}
          addNewCourse={addNewCourse}
          deleteCourse={deleteCourse}
          updateCourse={updateCourse} />
          } />
          <Route path="Courses/:courseId/*" element={<Courses courses={courses}/>} />
          <Route path="Calendar/*" element={<Calendar/>} />
          <Route path="/CourseMenu/:courseId/*" element={<CourseMenu/>} />
        </Routes>
      </div>
    </div>
   </div>
   </Provider>
  );
}
export default Kanbas;