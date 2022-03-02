import React from 'react'

import { NavLink } from 'react-router-dom'

function NavBar() {
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
            <li>
                <NavLink to="/" exact>
                    Back to Home
                </NavLink>
            </li>
        </ul>
    </div>
  )
}

export default NavBar;