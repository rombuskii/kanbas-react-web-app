import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

const ProfileEditor = () => {
  const handleClick = () => {
    console.log("you saved ya profile")
  }
  return (
    <>
    <div className="">
                            <form className="">
                            <FontAwesomeIcon icon={'user'} className="fa-solid border border-2 rounded-pill p-3  fa-7x" style={{"color":"gray"}}/>
                            <div className="mb-3">
                                <label for="name" className="form-label">Name:*</label>
                                <input type="text" className="form-control" id="name" value="Eruba Ekedayen"/>
                            </div>
                            <div className="mb-3">
                                <label for="pronouns" className="form-label">Pronouns:</label>
                                <select className="form-select">
                                    <option selected>None</option>
                                </select>
                            </div>
                            <div className="mb-3">
                                <label for="title" className="form-label">Title:</label>
                                <input type="text" className="form-control" id="title" value=""/>
                            </div>
                            <div className="mb-3">
                                <h4>Contact</h4>
                                <p>No registered services, you can add some on the <span className='anchor'>settings</span> page.</p>
                            </div>
                            <div className="mb-3">
                                <h4>Biography</h4>
                                <textarea className="form-control">Student, Software Engineer, AI, Space, and renewables enthusiast.</textarea>
                            </div>
                            <div className="mb-3">
                                <h4>Links</h4>
                                <div className="row text-center">
                                    <div className="col-6">
                                        <b>Title</b>
                                        <div className="mb-1">
                                            <span className="d-flex gap-3 align-items-center">
                                                <input className="form-control" type="text" value="Youtube"/>
                                                <i className="fa-solid fa-arrow-right"></i>
                                            </span>
                                        </div>
                                        <button className="btn btn-light btn-sm border float-start">Add Another Link</button>
                                    </div>
                                    <div className="col-6">
                                        <b>URL</b>
                                        <div>
                                            <span className="d-flex gap-1 align-items-center">
                                                <input className="form-control" type="text" value="https://youtube.com"/>
                                                <i className="fa-solid fa-xmark" style={{"color": "#ff0000"}}></i>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <hr/>
                                <div className="float-end">
                                    <Link to={'/Kanbas/Account/Profile'} className="mx-2 btn btn-light border">Cancel</Link>
                                    <Link onClick={handleClick} to={'/Kanbas/Account/Profile'} className="btn btn-danger">Save Profile</Link>
                                </div>
                            </div>
                            </form>
                        </div>
                        <div className="">
                            <Link  to={'/Kanbas/Account/Profile'} className="float-end d-flex btn btn-light border align-items-baseline gap-1"><FontAwesomeIcon icon={'pencil'} className="fa-solid fa-pencil fa-flip-horizontal"/>Cancel Editing</Link>
                            </div>
    </>
  )
}

export default ProfileEditor