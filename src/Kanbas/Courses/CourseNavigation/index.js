import { Link, useParams, useLocation } from "react-router-dom";
import './index.css'
import db from '../../Database'

function CourseNavigation() {
  const links = db.courseNav;
  const { courseId } = useParams();
  const { pathname } = useLocation();
  return (
        <div class="col-xl-3 d-none d-xl-block acc-sidebar">
            <div class="acc-nav list-group d-flex flex-column text-left" style={{ width: 150 }} role="tablist">
                {links.map((link, index) => (
                <Link
                key={index}
                to={`/Kanbas/Courses/${courseId}/${link}`}
                className={`list-group-item ${pathname.includes(link) && "selected"}`}>
                    {link}
                    </Link>
                    ))}
            </div>
        </div>
  );
}


export default CourseNavigation;