import React, {useState} from 'react'

function Auth() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
   
    const [errors, setErrors] = useState([])

    function onSubmit(e){
        e.preventDefault()
        console.log('submitting...')
        const user = {
            username: username,
            password
        }
       
        fetch(`/users`,{
          method:'POST',
          headers:{'Content-Type': 'application/json'},
          body:JSON.stringify(user)
        })
        .then(res => res.json())
        .then(json => {
            // console.log(json)
            if(json.errors) setErrors(Object.entries(json.errors))
        })
    }
    return (
        <> 
        <form onSubmit={onSubmit}>
        <label>
          Username
   
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <br/> <label>
         Password
    
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
       
        <br/> <input type="submit" value="Sign up!" />
      </form>
      {/* {errors?errors.map(e => <div>{e[0]+': ' + e[1]}</div>):null} */}
        </>
    )
}

export default Auth;