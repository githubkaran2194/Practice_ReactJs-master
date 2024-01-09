import React, { useState } from 'react'
import Login from './Login'
import Dashboard from './Dashboard'
import { Toolbar } from '@mui/material';

const AllRoutes = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  const handleLogin = (user) => {
    setIsLoggedIn(true);
    setUsername(user);
  }

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername('')
  }
  return (
    <div>
      {
        isLoggedIn ? (<Dashboard handleLogout={handleLogout} isLoggedIn={isLoggedIn} username={username} />
        ) : (<Login onLogin={handleLogin} />)
      }
    </div>
  )
}

export default AllRoutes
