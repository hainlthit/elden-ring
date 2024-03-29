import React, {useState} from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useNavigate } from "react-router-dom";


function Login({setIsAuthenticated, setUser}) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const [pass, setPass] = useState(false)

    const [errors, setErrors] = useState([])

    let navigate = useNavigate();

    function onSubmit(e){
        e.preventDefault()
  
        const user = {
          username: username,
          password, 
      }
       
        fetch(`/login`,{
          method:'POST',
          headers:{'Content-Type': 'application/json'},
          body:JSON.stringify(user)
        })
        .then(res => {  
          if(res.ok){
          res.json()
          .then(user=>{
            setUser(user)
            setIsAuthenticated(true)
          })
          
        } else {
          res.json()
          .then(json => setErrors(json.error))
        }
      })
      window.location.replace("http://localhost:4000/home");

    }
  
    return (
      <div className='login-card'>
        {/*  <div className='card'>  */}
        <form onSubmit={onSubmit}>
          
          <TextField label="Username" type="text" value={username} variant="outlined" onChange={(e) => setUsername(e.target.value)} />
        <br/><br/>
        <TextField label="Password" type="password" value={password} variant="outlined" onChange={(e) => setPassword(e.target.value)} />
        <br/>
        <br/><Button variant="contained" type="submit" value="Login!" >Submit</Button>
      </form>
      {/* {errors?errors.map(e => <div>{e}</div>):null} */}
    </div>
    )
}

export default Login;