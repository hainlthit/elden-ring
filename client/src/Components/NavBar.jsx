import React from 'react'

import { NavLink } from 'react-router-dom'

function NavBar({isAuthenticated}) {
  return (
    <div>
        <ul>
            <li>
                <NavLink to="/sign-up" exact>
                    Sign-Up
                </NavLink>
            </li>
            <li>
                <NavLink to="/login" exact>
                    Login
                </NavLink>
            </li>

            {isAuthenticated?             
            <li>
                <NavLink to="/" exact>
                    Back to Home
                </NavLink>
            </li>:
            <p>nah fam</p>}
        </ul>
    </div>
  )
}

export default NavBar;