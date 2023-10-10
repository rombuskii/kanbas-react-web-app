import React from 'react'
import ModuleList from '../Modules/ModuleList'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Home = () => {
  return (
    <>
    <div class="col-12 col-xl-9 col-xxl-6">
        <div class="clearfix">
            <button class="mx-1 float-end btn btn-secondary"><FontAwesomeIcon icon={'ellipsis-vertical'}/></button>
            <button class="mx-1 float-end btn btn-danger"><FontAwesomeIcon icon={'plus'}/> Module</button>
            <div class="dropdown mx-1">
                <button class="float-end btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <FontAwesomeIcon icon={'circle-check'} style={{"color": "#4dff00"}}/> Publish All
                    </button>
                    <ul class="dropdown-menu">

                    </ul>
            </div>
            <button class="mx-1 float-end btn btn-secondary">View Progress</button>
            <button class="mx-1 float-end btn btn-secondary">Collapse All</button>
        </div>
        <hr/>
    <ModuleList/>
    </div>
    <div class="d-none d-xxl-block col-xxl-3">
        <div class="float-end">
            <p>Course Status</p>
            <button class="mx-2 btn btn-secondary">Unpublish</button>
            <button class="mx-0 btn btn-success" disabled>Published</button>
            <div class="d-flex mt-3 mb-3 flex-column gap-2">
                                    <button class="btn btn-secondary">Import Existing Content</button>
                                    <button class="btn btn-secondary">Import from Commons</button>
                                    <button class="btn btn-secondary">Choose Home Page</button>
                                    <button class="btn btn-secondary">View Course Stream</button>
                                    <button class="btn btn-secondary">New Announcement</button>
                                    <button class="btn btn-secondary">New Analytics</button>
                                    <button class="btn btn-secondary">View Course Notifications</button>
                                </div>
                                <h6>To Do</h6>
                                <hr/>
                                <span className='anchor'>Assignment 1</span>
                                <br/>
                                <br/>
                                <h6>Coming Up</h6>
                                <hr/>
                                <span className='anchor'>Lecture</span>
                                </div>
                        </div>
    </>
  )
}

export default Home