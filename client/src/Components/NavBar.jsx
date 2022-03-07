import React from 'react'

import { NavLink } from 'react-router-dom'

function NavBar({isAuthenticated, setIsAuthenticated, user, setUser}) {

    function logout() {
        fetch('/logout',{
            method:'DELETE'
        })
        .then(()=>{
            setIsAuthenticated(false)
            setUser(null)
        })
    }

  return (
    <div>
        <ul>
            <li>
                <NavLink to="/sign-up" exact>
                    Sign-Up
                </NavLink>
            </li>
            <li>
               {user? <li onClick={logout}> Logout </li> : 
               <NavLink to="/login" exact>
                    Login
                </NavLink>} 
            </li>
            <li>
                <NavLink to="/" exact>
                    Back to Home
                </NavLink>
            </li>
            {isAuthenticated?             
            <li>
                <NavLink to="/spells" exact>
                    Spells
                </NavLink>
            </li>:
            <p> </p>}
            {isAuthenticated?             
            <li>
                <NavLink to="/classes" exact>
                    Classes
                </NavLink>
            </li>:
            <p> </p>}
        </ul>
    </div>
  )
}

export default NavBar;