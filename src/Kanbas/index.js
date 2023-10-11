//import Nav from "../Nav";
import KanbasNavigation from "./KanbasNavigation";
import { Routes, Route, Navigate, Link } from "react-router-dom";
import Dashboard from "./Dashboard";
import Account from "./Account";
import Courses from "./Courses";
import Calendar from "./Calendar";
import './index.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BurgerMenu from "./Menus/Burger";
import CourseMenu from "./Menus/Course";

function Kanbas() {
  return (
   <>
   {/*<Nav/>*/}
   <nav class="d-xl-none navbar bg-dark text-white">
            <div class="container-fluid d-flex justify-content-between align-items-center">
                <Link to={'/Kanbas/Menus/Burger'}><FontAwesomeIcon icon={'bars'} className="fa-solid burger-menu fa-lg fa-bars" style={{"color":"white"}}/></Link>
                <h6>Modules</h6>
                <span class="d-flex gap-2 align-items-center">
                    <FontAwesomeIcon icon={'glasses'} className="fa-solid fa-glasses"/>
                    <Link to={'/Kanbas/Menus/Course'} class="navbar-brand" ><FontAwesomeIcon icon={'chevron-down'} className="text-white fa-solid fa-chevron-down"/></Link>
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
          <Route path="Dashboard" element={<Dashboard />} />
          <Route path="Courses/:courseId/*" element={<Courses/>} />
          <Route path="Calendar/*" element={<Calendar/>} />
        </Routes>

      </div>
    </div>
   </div>
    </>
  );
}
export default Kanbas;