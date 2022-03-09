import './App.css';
import './index.css'
import { Route, Routes } from 'react-router-dom'
import {useEffect, useState} from 'react'

//components
import NavBar from './Components/NavBar';
import LoginAd from './Components/LoginAd';
import Auth from "../src/Components/Auth.jsx"
import Login from "../src/Components/Login.jsx"
import MainContainer from './Components/MainContainer';
import TemporaryDrawer from "../src/Components/TemporaryDrawer.jsx"

//pages
import Spells from './Components/Spells';
import Classes from './Components/Classes';
import Skills from './Components/Skills File/Skills';


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
    <div className='App' >
        {/* <div className='sidebar'>   */}
          <TemporaryDrawer className="nav" setIsAuthenticated={setIsAuthenticated} isAuthenticated={isAuthenticated} user={user} setUser={setUser}/>
        {/* </div> */}
        <div className="main-content">
          <div className="content"> 
              <Routes>
                  <Route exact path="/sign-up" element={<Auth/>} /> 
                  <Route exact path="/classes" element={<Classes/>} /> 
                  <Route exact path="/spells" element={<Spells/>} /> 
                  <Route exact path="/skills" element={<Skills/>} /> 
                  <Route exact path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} setUser={setUser} />} /> 
              </Routes>
              {isAuthenticated? <LoginAd/> : <p>Placeholder for "You need to make and Account" </p>}
            <MainContainer user={user} setUser={setUser}/>
           </div>
        </div>
    </div>
  )
  
}

export default App;
