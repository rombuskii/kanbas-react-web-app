import React from "react";
import { Link, useParams } from "react-router-dom";
import db from "../../Database";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './index.css'

function Assignments() {
  const { courseId } = useParams();
  const assignments = db.assignments;
  const courseAssignments = assignments.filter(
    (assignment) => assignment.course === courseId);
  return (
    <div class="col-9 assignments">
        <input class="form-control" type="text" placeholder="Search for Assignment"/>
        <span class="float-end clearfix">
            <button class="btn mx-1 btn-secondary"><FontAwesomeIcon icon={'plus'}/>Group</button>
            <button class="btn mx-1 btn-danger"><FontAwesomeIcon icon={'plus'}/>Assignment</button>
            <button class="btn mx-1 btn-secondary"><FontAwesomeIcon icon={'ellipsis-vertical'}/></button>
        </span>
        <ul class="modules mt-3 list-group">
            <li class="d-flex justify-content-between align-items-baseline list-group-item-secondary header">Assignments 
            <span class="d-flex align-items-baseline gap-3 mx-2 float-end">
                <p class="fs-6 border border-2 rounded-pill p-2">40% of Total</p>
                <FontAwesomeIcon icon={'plus'}/> 
                <FontAwesomeIcon icon={'ellipsis-vertical'}/>
            </span>
            </li>
            {courseAssignments.map((assignment) => (
            <li className="d-flex justify-content-between align align-items-center list-group-item list-group-item-secondary material">
                <Link
                key={assignment._id}
                to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
                className="">
                        <span class="topic">{assignment.title}</span>
                        <span>
                            <p class="slight-text mt-0"><b>Due:</b> {assignment.due} | 100pts</p>
                        </span>
                </Link>
                <span class="d-flex gap-3 mx-2 float-end">
                    <FontAwesomeIcon icon={'circle-check'} style={{"color": "#4dff00"}}/>
                    <FontAwesomeIcon icon={'ellipsis-vertical'}/>
                </span>
          </li>
        ))}
        </ul>
    </div>
  );
}
export default Assignments;

/*<h2>Assignments for course {courseId}</h2>
      <div className="list-group">
        {courseAssignments.map((assignment) => (
          <Link
            key={assignment._id}
            to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
            className="list-group-item">
            {assignment.title}
          </Link>
        ))}
      </div>
*/