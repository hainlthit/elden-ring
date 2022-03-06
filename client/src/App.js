import './App.css';
import Auth from "../src/Components/Auth.jsx"
import Login from "../src/Components/Login.jsx"
import { Route, Routes } from 'react-router-dom'
import {useEffect, useState} from 'react'
import Spells from './Components/Spells';
//components
import NavBar from './Components/NavBar';
import LoginAd from './Components/LoginAd';

function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);


  // useEffect(() => {
  //   fetch("/authorized_user")
  //   .then((res) => {
  //     if (res.ok) {
  //       res.json()
  //       .then((user) => {
  //         setIsAuthenticated(true);
  //         setUser(user);
  //       });
  //     }
  //   });
  // })

  return (
    <div>
        <NavBar setIsAuthenticated={setIsAuthenticated} isAuthenticated={isAuthenticated} user={user} setUser={setUser} />
        <p>
        HELLO WORLD
        </p>
        
        <Routes>
            <Route exact path="/sign-up" element={<Auth/>} /> 
            <Route exact path="/spells" element={<Spells/>} /> 
            <Route exact path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} setUser={setUser} />} /> 
        </Routes>
        {isAuthenticated? <LoginAd/> : <p>Placeholder for "You need to make and Account" </p>}
    </div>
  )
  
}

export default App;
