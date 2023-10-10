import React from 'react'
import db from '../../Database'
import { Link, useLocation } from 'react-router-dom'

const AccountNavigation = () => {
    const {pathname} = useLocation();
    const nav = db.accountNav
  return (
    <div class="col-2 acc-sidebar">
        <div class="acc-nav list-group d-flex flex-column text-left" role="tablist">
            {
                nav.map((link, index) => (
                    <Link key={index} to={`/Kanbas/Account/${link}`} className={`list-group-item list-group-item-action ${pathname.includes(link) && "selected"}`}>
                    {link}
                    </Link>
                    )
                )
            }
        </div>
    </div>
  )
}

export default AccountNavigation