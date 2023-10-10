import React from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './index.css'

function ModuleList() {
  const { courseId } = useParams();
  const modules = db.modules;
  return (
    <ul className="modules list-group">
      {
       modules
         .filter((module) => module.course === courseId)
         .map((module, index) => (
            <li key={index} class="list-group-item list-group-item-secondary header mb-5 rounded">{module.name} 
            <span class="d-flex gap-3 mx-2 float-end">
                <FontAwesomeIcon icon={'circle-check'} style={{"color": "#4dff00"}}/>
                <FontAwesomeIcon icon={'plus'}/>
                <FontAwesomeIcon icon={'ellipsis-vertical'}/>
            </span>
            <p>{module.description}</p>
        </li>
      ))
      }
    </ul>
  );
}
export default ModuleList;
/*
<ul className="modules list-group">
    <li key={index} class="list-group-item list-group-item-secondary header">{module.name} 
        <span class="d-flex gap-3 mx-2 float-end">
            <FontAwesomeIcon icon={'circle-check'} style={{"color": "#4dff00"}}/>
            <FontAwesomeIcon icon={'plus'}/>
            <FontAwesomeIcon icon={'ellipsis-vertical'}/>
        </span>
        <p>{module.description}</p>
    </li>
</ul>
*/