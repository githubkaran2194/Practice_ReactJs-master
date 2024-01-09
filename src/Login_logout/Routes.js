import React, { useState } from 'react'
import Login from './Login'
import Dashboard from './Dashboard'
import { Toolbar } from '@mui/material'

const Routes = () => {
    const [isLoggedIn, setLoggedIn] = useState(false);
    const [username, setUsername]=useState('');
    const handleLogin=(user)=>{
        setLoggedIn(true);
        setUsername(user);
    }

    const handleLogout=()=>{
        setLoggedIn(false);
    }
  return (
    <div>
     {
        isLoggedIn ? (<Dashboard isLoggedIn={isLoggedIn} handleLogin={handleLogin} handleLogout={handleLogout} username={username}/>):(
            <Login onLogin={handleLogin}/>
        )
     }
    </div>
  )
}

export default Routes
