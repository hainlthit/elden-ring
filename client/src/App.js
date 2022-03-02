import './App.css';
import Auth from "../src/Components/Auth.jsx"
import Login from "../src/Components/Login.jsx"
import { Route, Routes } from 'react-router-dom'

//components
import NavBar from './Components/NavBar';



function App() {
  return (
    <div>
        <NavBar/>
        <p>
        HELLO WORLD
        </p>
        
        <Routes>
            <Route exact path="/sign-up" element={<Auth/>} /> 
            <Route exact path="/login" element={<Login/>} /> 
        </Routes>
    </div>
  )
  
}

export default App;
