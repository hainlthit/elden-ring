import React from 'react'
import { useState } from 'react';
import NavBar from './NavBar';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';

import Slide from '@mui/material/Slide';
import { Button } from '@mui/material';

export default function TemporaryDrawer({setIsAuthenticated, isAuthenticated, user, setUser}){
const [isClicked, setIsClicked] = useState(false)
console.log(user)

function myFunction() {
  let element = document.body;
 
  element.classList.toggle("dark");

  setIsClicked(isClicked => !isClicked);
}

function HideOnScroll(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
      target: window ? window() : undefined,
    });
  
    return (
      <Slide appear={false} direction="down" in={!trigger}>
        {children}
      </Slide>
    );
  }

return (
<div className="NavBar">
    {/* <nav className="nav">
    <div className="profile">
        <img src={"https://gpstatic.com/acache/42/66/1/uk/t620x300-9db06a53d8c94e1b18167908a402ff3b.jpg"} alt="elden-ring"/><br/>
    </div>
        <ul className='nav-items'>
           
           <NavBar setIsAuthenticated={setIsAuthenticated} isAuthenticated={isAuthenticated} user={user} setUser={setUser}/>

        </ul>
        <footer className="footer">
        <button className="dark-mode-btn" onClick={myFunction}>{isClicked ? "☾" : "☼"}</button><br/>
            <p>©2022 Hain & Ilolo</p>
        </footer>

    </nav> */}
    <React.Fragment>
      <CssBaseline />
      <HideOnScroll >
        <AppBar>
          <Toolbar>
            <Typography variant="h6" component="div">
            <NavBar setIsAuthenticated={setIsAuthenticated} isAuthenticated={isAuthenticated} user={user} setUser={setUser}/>
            {/* <Button className="dark-mode-btn" onClick={myFunction}>{isClicked ? "☾" : "☼"}</Button><br/>         */}
            </Typography>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
    </React.Fragment>
    
</div>
)
}


