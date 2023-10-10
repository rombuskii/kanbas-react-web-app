import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

const Profile = () => {
  return (
    <>
    <div class="">
                            <div class="">
                            <section class="py-3">
                            <FontAwesomeIcon icon={'user'} className="fa-solid border border-2 rounded-pill p-3 fa-user fa-7x" style={{"color":"gray"}}/>
                            <h3>Eruba Ekedayen</h3>
                            </section>
                            <section class="py-3">
                            <h4>Contact</h4>
                            <p>No registered services, you can add some on the <span className='anchor'>settings</span> page.</p>
                            </section>
                            <section class="py-3">
                                <h4>Biography</h4>
                                <p>Student, Software Engineer, AI, Space, and renewables enthusiast.</p>
                            </section>
                            <section class="py-3">
                                <h4>Link</h4>
                                <span className='anchor'><FontAwesomeIcon icon={'link'} style={{"color":"gray"}}/>Youtube</span>
                            </section>
                            </div>
                        </div>
                        <Link to={'/Kanbas/Account/Profile/ProfileEditor'}>
                            <span  class="float-end d-flex btn btn-light border align-items-baseline gap-1"><FontAwesomeIcon icon={'pencil'} className="fa-solid fa-pencil fa-flip-horizontal"/>Edit Profile</span>
                        </Link>
    </>
  )
}

export default Profile