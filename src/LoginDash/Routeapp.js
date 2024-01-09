import React, { useState } from 'react';
import Dashboard from './Dashboard';
import Login from './Login';
import Home from './Home';

function Routeapp() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({
    username: '',
    password: '',
  });

  const handleLogin = (username) => {
    setIsLoggedIn(true);
    setUser({ username, password: '' });
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <>
      {isLoggedIn ? (
        <Dashboard
          isLoggedIn={isLoggedIn}
          handleLogout={handleLogout}
        />
      ) : (
        <Login onLogin={handleLogin} />
      )}
     
    </>
  );
}

export default Routeapp;
