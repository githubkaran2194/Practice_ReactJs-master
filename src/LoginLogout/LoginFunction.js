// App.js
import React, { useState } from 'react';
import Dashboard from './Dashboard';
import Login from './Login';

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (user) => {
    setLoggedIn(true);
    setUsername(user);
    setPassword(user);
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setUsername('');
    setPassword('');
  };

  return (
    <div>
      {isLoggedIn ? (
        <Dashboard isLoggedIn={isLoggedIn} handleLogout={handleLogout} username={username}/>
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;
