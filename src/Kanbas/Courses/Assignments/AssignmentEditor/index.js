import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import db from "../../../Database";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './index.css'

function AssignmentEditor() {
  const { assignmentId } = useParams();
  const assignment = db.assignments.find(
    (assignment) => assignment._id === assignmentId);

  const { courseId } = useParams();
  const navigate = useNavigate();
  const handleSave = () => {
    console.log("Actually saving assignment TBD in later assignments");
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };
  return (
    <div className="col-9 assignments clearfix">
                            <span className="float-end gap-2 d-flex align-items-baseline">
                                <button className="btn btn-success d-flex gap-1 align-items-baseline"><FontAwesomeIcon icon={'circle-check'}/><b>Published</b></button>
                                <button className="btn btn-secondary"><FontAwesomeIcon icon={'ellipsis-vertical'}/></button>
                            </span>
                            <br/>
                            <hr/>
                            <form>
                            <div className="d-flex mb-4 flex-column gap-4 justify-content-center">
                                <section>
                                <label>Assignment Name</label>
                                <input className="form-control" type="text" value={assignment.title}/>
                                </section>
                                <textarea rows="3" className="form-control">Work in progress.</textarea>
                            </div>
                            <div className="row d-flex align-items-center mb-4">
                                <div className="col-4">
                                    <label className="float-end">Points</label>
                                </div>
                                <div className="col-6">
                                    <input className="form-control" max="100" min="0" value="100" type="number"/>
                                </div>
                            </div>
                            <div className="row d-flex align-items-center mb-4">
                                <div className="col-4">
                                    <label className="float-end">Assignment Group</label>
                                </div>
                                <div className="col-6">
                                    <select className="form-select">
                                        <option className="" selected>ASSIGNMENTS</option>
                                    </select>
                                </div>
                            </div>
                            <div className="row d-flex align-items-center mb-4">
                                <div className="col-4">
                                    <label className="float-end">Display Grade as</label>
                                </div>
                                <div className="col-6">
                                    <select className="form-select">
                                        <option className="" selected>Percentage</option>
                                    </select>
                                </div>
                            </div>
                            <div className="row d-flex align-items-center mb-4">
                                <div className="col-4">
                                    <label className="float-end"></label>
                                </div>
                                <div className="col-6">
                                    <input id="final-grade-check" className="form-check-input" type="checkbox"/>
                                    <label for="final-grade-check" className="form-check-label">Do not count this assignment towards the final grade</label>
                                </div>
                            </div>
                            <div className="row d-flex mb-4">
                                <div className="col-4">
                                    <label className="float-end">Submission Type</label>
                                </div>
                                <div className="col-6 border border-1 mx-3 p-3">
                                    <div className="row">
                                    <div className=" col-6">
                                    <select className="form-select">
                                        <option className="" selected>Online</option>
                                    </select>
                                    </div>
                                    </div>
                                    <p className="mt-4"><b>Online Entry Options</b></p>
                                    <div className="d-flex flex-column gap-4">
                                    <div>
                                    <input id="text-entry" className="form-check-input" type="checkbox"/>
                                    <label for="text-entry" className="form-check-label">Text Entry</label>
                                    </div>
                                    <div>
                                    <input id="web-url" className="form-check-input" type="checkbox"/>
                                    <label for="web-url" className="form-check-label">Website URL</label>
                                    </div>
                                    <div>
                                    <input id="media-recs" className="form-check-input" type="checkbox"/>
                                    <label for="media-recs" className="form-check-label">Media Recordings</label>
                                    </div>
                                    <div>
                                    <input id="stud-ann" className="form-check-input" type="checkbox"/>
                                    <label for="stud-ann" className="form-check-label">Student Annotation</label>
                                    </div>
                                    <div className="mb-4">
                                    <input id="file-up" className="form-check-input" type="checkbox"/>
                                    <label for="file-up" className="form-check-label">File Uploads</label>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row d-flex">
                                <div className="col-4">
                                    <label className="float-end">Assign</label>
                                </div>
                                <div className="col-6 border border-1 mx-3 p-3">
                                    <h6><b>Assign To</b></h6>
                                    <div className="u-tagsinput">
                                    <input data-role="tagsinput" className="form-control mb-4" type="text" value="Everyone"/>
                                    </div>
                                    <h6><b>Due</b></h6>
                                    <input className="form-control mb-4" type="date"/>
                                    <div className="row">
                                        <div className="col-6">
                                            <h6><b>Available from</b></h6>
                                            <input className="form-control mb-4" type="date"/>
                                        </div>
                                        <div className="col-6">
                                            <h6><b>Until</b></h6>
                                    <input className="form-control mb-4" type="date"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row d-flex align-items-center mb-4 mt-0">
                                <div className="col-4">
                                    <label className="float-end"></label>
                                </div>
                                <div className="col-6 text-center mx-3  px-0">
                                    <button type="button" className="text-center full btn btn-secondary btn-lg btn-block"><i className="fa-solid fa-plus"></i>Add</button>
                                </div>
                            </div>
                            <hr/>
                        <div className="clearfix">
                            <span className="float-start">
                            <input id="notify-usr" className="form-check-input" type="checkbox"/>
                            <label for="notify-usr" className="form-check-label">Notify users that this content has changed</label>
                            </span>
                            <span className="float-end">
                            <Link className="mx-2" to={`/Kanbas/Courses/${courseId}/Assignments`}>
                                <button className="btn btn-secondary">Cancel</button>
                            </Link>
                                <button onClick={handleSave} className="btn btn-danger">Save</button>
                                </span>
                        </div>
                    </form>
                        <hr/>
                    </div>
  );
}


export default AssignmentEditor;