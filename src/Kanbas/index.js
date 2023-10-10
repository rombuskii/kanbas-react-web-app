//import Nav from "../Nav";
import KanbasNavigation from "./KanbasNavigation";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Account from "./Account";
import Courses from "./Courses";
import Calendar from "./Calendar";
import './index.css'

function Kanbas() {
  return (
   <>
   {/*<Nav/>*/}
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