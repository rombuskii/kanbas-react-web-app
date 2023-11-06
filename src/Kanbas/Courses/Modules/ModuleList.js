import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './index.css'
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
  setModules
} from "./modulesReducer";
import * as client from "./client";
import { findModulesForCourse, createModule } from "./client";

function ModuleList() {
  const { courseId } = useParams();
  const modules = useSelector((state) => state.modulesReducer.modules);
  const module = useSelector((state) => state.modulesReducer.module);
  const dispatch = useDispatch();
  const handleDeleteModule = (moduleId) => {
    client.deleteModule(moduleId).then((status) => {
      dispatch(deleteModule(moduleId));
    });
  };

  const handleAddModule = () => {
    createModule(courseId, module).then((module) => {
      dispatch(addModule(module));
    });
  };

  const handleUpdateModule = async () => {
    console.log(module._id)
    const status = await client.updateModule(module);
    dispatch(updateModule(module));
  };
  useEffect(() => {
    findModulesForCourse(courseId)
    .then((modules) =>
    dispatch(setModules(modules))
    );
  }, [courseId, dispatch]);


  return (
    <ul className="modules list-group">
      <li className="list-group-item">
        <div className="border border-secondary rounded p-3 d-flex flex-column gap-2">
        <input value={module.name}
          onChange={(e) => dispatch(setModule({
            ...module, name: e.target.value }))}
        />
        <textarea value={module.description}
          onChange={(e) => dispatch(setModule({
            ...module, description: e.target.value }))}
        />
        <button onClick={handleAddModule} className="btn btn-success float-right">Add</button>
        <button onClick={handleUpdateModule} className="btn btn-warning">Update</button>
        </div>
        <hr/>
      </li>
      {
       modules
         .filter((module) => module.course === courseId)
         .map((module, index) => (
            <li key={index} class="list-group-item list-group-item-secondary header mb-5 rounded">{module.name} 
            <span class="d-flex gap-3 mx-2 align-items-baseline float-end">
                <FontAwesomeIcon icon={'circle-check'} style={{"color": "#4dff00"}}/>
                <FontAwesomeIcon icon={'plus'}/>
                <FontAwesomeIcon icon={'ellipsis-vertical'}/>
                <button onClick={() => dispatch(setModule(module))} className="btn btn-secondary">Edit</button>
                <button onClick={() => handleDeleteModule(module._id)} className="btn btn-danger">Delete</button>
            </span>
            <p>{module.description}</p>
        </li>
      ))
      }
    </ul>
  );
}
export default ModuleList;
