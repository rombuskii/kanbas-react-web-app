import { Link, useLocation } from "react-router-dom";
import db from "../Database";
import './index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function KanbasNavigation() {
  //const links = ["Account", "Dashboard", "Courses", "Calendar"];
  const { pathname } = useLocation();
  const links = db.links
  return (
    <div className="d-none d-xl-block col-2 col-xl-1 px-0 text-center navigation position-sticky">
        <div class="list-group item d-flex flex-column" role="tablist">
        <img class="img-fluid small" src="./images/nulogo.png" alt="nav img"></img>
        {links.map((link, index) => (
        <Link
          key={index}
          to={`/Kanbas/${link.name}`}
          className={`list-group-item ${pathname.includes(link.name) && "active"}`}>
            <FontAwesomeIcon className={!link.border ? "nav-icon" : link.name === "Account" ? 'icon-white border border-2 p-2 rounded-pill' : 'nav-icon border border-danger border-2 p-2 rounded-pill'} icon={link.icon}/>
            <p>{link.name}</p>
        </Link>
      ))}

      </div>
    </div>
  );
}
export default KanbasNavigation;
/*
<div class="d-none d-xl-block col-2 col-xl-1 px-0 text-center navigation position-sticky">
                    <div class="list-group item d-flex flex-column" role="tablist">
                        <img class="img-fluid small" src="..//images/nulogo.png"/>
                            <a href="./AccountNavigation.html" class="list-group-item list-group-item-action" data-toggle="list">
                                <i class="fa-solid border border-2 p-2 rounded-pill icon-white fa-user fa-sm"></i>
                                <p>Account</p>
                            </a>
                            <a href="./Dashboard.html" class="list-group-item list-group-item-action" data-toggle="list">
                                <i class="fa-solid fa-gauge fa-sm" style="color:red"></i>
                                <p>Dashboard</p>
                            </a>
                            <a href="#" class="list-group-item list-group-item-action active" data-toggle="list">
                                <i class="fa-solid fa-book fa-sm" style="color:red"></i>
                                <p>Courses</p>
                            </a>
                            <a href="#" class="list-group-item list-group-item-action" data-toggle="list">
                                <i class="fa-regular fa-calendar fa-sm" style="color:red"></i>
                                <p>Calendar</p>
                            </a>
                            <a href="#" class="list-group-item list-group-item-action" data-toggle="list">
                                <i class="fa-solid fa-inbox fa-sm" style="color:red"></i>
                                <p>Inbox</p>
                            </a>
                            <a href="#" class="list-group-item list-group-item-action" data-toggle="list">
                                <i class="fa-regular fa-clock fa-sm" style="color:red"></i>
                                <p>History</p>
                            </a>
                            <a href="#" class="list-group-item list-group-item-action" data-toggle="list">
                                <i class="fa-solid fa-microchip fa-sm" style="color:red"></i>
                                <p>Studio</p>
                            </a>
                            <a href="#" class="list-group-item list-group-item-action" data-toggle="list">
                                <i class="fa-solid fa-right-from-bracket fa-sm" style="color:red"></i>
                                <p>Commons</p>
                            </a>
                            <a href="#" class="list-group-item list-group-item-action" data-toggle="list">
                                <i class="fa-solid border border-2 p-2 rounded-pill border-danger fa-question fa-sm" style="color:red"></i>
                                <p>Help</p>
                            </a>
                    </div>
                </div>
                */