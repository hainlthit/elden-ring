import './App.css';
import Auth from "../src/Components/Auth.jsx"
import Login from "../src/Components/Login.jsx"
import { Route, Routes } from 'react-router-dom'
import {useEffect, useState} from 'react'
//components
import NavBar from './Components/NavBar';

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
        <NavBar isAuthenticated={isAuthenticated} />
        <p>
        HELLO WORLD
        </p>
        
        <Routes>
            <Route exact path="/sign-up" element={<Auth/>} /> 
            <Route exact path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} setUser={setUser} />} /> 
        </Routes>
        
    </div>
  )
  
}

export default App;
