//import Nav from "../Nav";
import UserTable from "../users/table"
import Signin from "../users/signin";
import Account from "../users/account";
import KanbasNavigation from "./KanbasNavigation";
import { Routes, Route, Navigate, Link, useLocation } from "react-router-dom";
import Dashboard from "./Dashboard";
import UserAccount from "./Account";
import Courses from "./Courses";
import Calendar from "./Calendar";
import './index.css'
import { useState, useEffect } from "react";
import db from '../Kanbas/Database'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CourseMenu from "./Menus/Course";
import store from "./store";
import { Provider } from "react-redux";
import axios from "axios";
import { COURSES_URL } from "./Courses/Modules/client";
import Signup from "../users/signup";

function Kanbas() {
  const [courses, setCourses] = useState([])
  const URL = COURSES_URL;
  const findAllCourses = async () => {
    const response = await axios.get(URL);
    setCourses(response.data);
  };
  useEffect(() => {
    findAllCourses();
  }, []);

  const [course, setCourse] = useState({
    name: "New Course",      number: "New Number",
    startDate: "2023-09-10", endDate: "2023-12-15",
  });
  const addNewCourse = async () => {
    const response = await axios.post(URL, course);
    setCourses([
      response.data,
      ...courses,
    ]);
    setCourse({ name: "" });
  };

  const deleteCourse = async (course) => {
    const response = await axios.delete(
      `${URL}/${course._id}`
    );
    setCourses(courses.filter((c) => c._id !== course._id));
  };
  const updateCourse = async (course) => {
    const {data} = await axios.put(`${URL}/${course._id}`, course);
    setCourses(
      courses.map((c) => {
        if (c._id === course._id) {
          return data;
        } else {
          return c;
        }
      })
    );
    setCourse({ name: "" });
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
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/account" element={<Account />} />
          <Route path="/admin/users" element={<UserTable />} />
          <Route path="/account/:id" element={<Account />} />
          <Route path="Account/*" element={<UserAccount/>} />
          <Route path="Dashboard" element={
          <Dashboard
          courses={courses}
          course={course}
          setCourse={setCourse}
          addNewCourse={addNewCourse}
          deleteCourse={deleteCourse}
          updateCourse={updateCourse} />
          } />
          <Route path="Courses/:courseId/*" element={<Courses/>} />
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