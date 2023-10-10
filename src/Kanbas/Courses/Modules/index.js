import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import ModuleList from './ModuleList'

const Modules = () => {
  return (
    <div class="col-12 col-xl-9">
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
  )
}

export default Modules