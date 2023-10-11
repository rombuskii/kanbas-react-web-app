import './App.css';
import HelloWorld from "./Labs/a3/HelloWorld";
import Labs from "./Labs";
import Kanbas from "./Kanbas";
import { HashRouter } from 'react-router-dom';
import "bootstrap"
import {Routes, Route, Navigate} from "react-router";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faUser, faChevronDown, faXmark, faGauge, faBook, faCalendar, faInbox, faClock, faMicrochip, faQuestion, faRightFromBracket, faNewspaper, faEllipsisVertical, faGlasses, faBars, faCircleCheck, faPlus, faLink, faPencil, faHouse, faDiagramProject, faPenToSquare} from "@fortawesome/free-solid-svg-icons";
import BurgerMenu from './Kanbas/Menus/Burger';
import CourseMenu from './Kanbas/Menus/Course';

library.add(faUser, faPenToSquare, faDiagramProject, faHouse, faXmark, faChevronDown, faPencil,faLink, faPlus , faCircleCheck ,faEllipsisVertical, faGauge, faBook, faCalendar, faInbox, faClock, faMicrochip, faQuestion, faRightFromBracket, faNewspaper, faGlasses, faBars);

function App() {
  return (
    <HashRouter>
    <div>
    <Routes>
        <Route path="/"         element={<Navigate to="/Labs"/>}/>
        <Route path="/hello"    element={<HelloWorld/>}/>
        <Route path="/Labs/*"   element={<Labs/>}/>
        <Route path="/Kanbas/Menus/Burger/*" element={<BurgerMenu/>} />
          <Route path="/Kanbas/Menus/Course/*" element={<CourseMenu/>} />
        <Route path="/Kanbas/*" element={<Kanbas/>}/>
      </Routes>
    </div>
    </HashRouter>
  );
}

export default App;
