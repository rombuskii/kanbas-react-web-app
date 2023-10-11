import React from 'react'
import db from '../../Database'
import { Link, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.css'
const BurgerMenu = () => {
    const navigate = useNavigate();
    const nav = db.links
  return (
    <body class="p-5 burger">
        <div class="clearfix mb-3 ">
            <span className='exit' onClick={() => navigate(-1)} to={'/Kanbas/Dashboard'}><FontAwesomeIcon icon={'xmark'} className="fa-solid fa-xmark float-end" style={{"color":"gray"}}/></span>
        </div>
        <div class="d-flex flex-column gap-5 justify-content-start">
            {
                nav.map((link, index) => (
                    <Link to={`/Kanbas/${link.name}`} key={index} className='d-flex gap-3 nav align-items-center'>
                        <FontAwesomeIcon icon={link.icon} />
                        {link.name}
                    </Link>
                ))
            }
        </div>
    </body>
  )
}

export default BurgerMenu