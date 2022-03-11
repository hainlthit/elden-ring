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
import SpellDetail from './Components/SpellDetail';


function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  // useEffect(() => {
  //   fetch("/authorized_user")
  //   .then((res) => {
  //     if (res.ok) {
  //       res.json()
  //       .then((user) => {
  //         setUser(user);
  //         setIsAuthenticated(true);
  //       });
  //     }
  //   });
  // })

  useEffect(() => {
    fetch("/authorized_user").then((response) => {
      if (response.ok) {
        response.json().then((user) =>{
         setUser(user);
         setIsAuthenticated(true)
        });
      }
    });
  }, []);

  console.log(user)

  return (
    <div className='App' >
          <TemporaryDrawer className="nav" setIsAuthenticated={setIsAuthenticated} isAuthenticated={isAuthenticated} user={user} setUser={setUser}/>
        <div className="main-content">
          <div className="content"> 
              <Routes>
                  <Route exact path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} setUser={setUser} />} /> 
                  <Route exact path="/sign-up" element={<Auth/>} /> 
                  <Route exact path="/classes" element={<Classes/>} /> 
                  <Route exact path="/spells" element={<Spells/>} /> 
                  <Route exact path="/skills" element={<Skills/>} /> 
                  <Route exact path="/spells/:id" element={<SpellDetail/>} />
                  <Route exact path="/home" element={isAuthenticated? <MainContainer user={user} setUser={setUser}/> : <p> </p>} />
              </Routes>
              {isAuthenticated? <LoginAd/> : <h3>You need to make and Account </h3>}
            {/* {isAuthenticated? <MainContainer user={user} setUser={setUser}/> : <p> </p>} */}
           </div>
        </div>
        <footer className="footer">
     
            <p>©2022 Hain & Ilolo</p>
        </footer>
    </div>
  )
  
}

export default App;
