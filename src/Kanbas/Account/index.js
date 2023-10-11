import React from 'react'
import AccountNavigation from './AccountNavigation'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {Navigate, Route, Routes, useLocation } from 'react-router-dom'
import Profile from './Profile'
import ProfileEditor from './ProfileEditor'

const Account = () => {
    const pathname = useLocation();
    const sections = pathname.pathname.split('/')
    const index = sections.indexOf('Account') + 1
    let section = sections[index]
    /*if(section.includes('%20')) {
        section = section.split('%20')
        section = section.join(" ")
    }*/

  return (
    <div class="col-10 col-xl-11">
        <div class="container py-3">
            <div class="d-flex align-items-baseline gap-4">
            <FontAwesomeIcon className='anchor' icon={'bars'} />
                    <h3>Eruba Ekedayen's {section}</h3>
                    </div>
                    <hr/>
                    <div class="d-flex justify-content-between">
                        <AccountNavigation/>
                        <Routes>
                            <Route path="/" element={<Navigate to="Profile"/>} />
                            <Route path="Profile" element={<Profile/>}/>
                            <Route path="Profile/ProfileEditor"element={<ProfileEditor/>}/>
                        </Routes>
                    </div>
                    </div>
                    </div>
  )
}

export default Account