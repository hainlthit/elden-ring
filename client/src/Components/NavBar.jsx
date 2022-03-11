import React from 'react'

import { NavLink } from 'react-router-dom'

function NavBar({isAuthenticated, setIsAuthenticated, user, setUser}) {
   
    function logout() {
        fetch('/logout',{
            method:'DELETE'
        })
        .then(()=>{
            setIsAuthenticated(false)
            setUser('')
        })
    }

  return (
    <div id="div_top_hypers">
        <ul id="ul_top_hypers">
             <li>
                <NavLink className="li-nav" to="/home" exact>
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink className="li-nav" to="/sign-up" exact>
                    Sign-Up
                </NavLink>
            </li>
            <li>
               <li onClick={logout}> Logout </li> 
               <NavLink className="li-nav" to="/login" exact>
                    Login
                </NavLink>
            </li>
           
            {isAuthenticated?             
            <li>
                <NavLink className="li-nav" to="/spells" exact>
                    Spells
                </NavLink>
            </li>: <p> </p>}
            {isAuthenticated?             
            <li>
                <NavLink className="li-nav" to="/classes" exact>
                    Classes
                </NavLink>
            </li>:
            <p> </p>}
            {isAuthenticated?             
            <li>
                <NavLink className="li-nav" to="/skills" exact>
                    Skills
                </NavLink>
            </li>:
            <p> </p>}
            
        </ul>
    </div>
  )
}

export default NavBar;