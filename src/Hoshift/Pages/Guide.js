// App.js
import React, { useState } from 'react';
import { authenticateUser } from './Auth'; // Import the authentication logic

const App = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [inputUsername, setInputUsername] = useState('');
  const [inputPassword, setInputPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    const isValid = authenticateUser(inputUsername, inputPassword);

    if (isValid) {
      setLoggedIn(true);
      setUsername(inputUsername);
      setPassword(inputPassword);
      setError('');
    } else {
      setError('Invalid Username or Password');
    }
  };

  const handleLogout = (e) => {
    e.preventDefault();
    setLoggedIn(false);
    setUsername('');
    setPassword('');
    setError('');
  };

  const handleUsernameChange = (event) => {
    setInputUsername(event.target.value);
    setError('');
  };

  const handlePasswordChange = (event) => {
    setInputPassword(event.target.value);
    setError('');
  };

  return (
    <div>
      <header>
        <h1>React Login/Logout Example</h1>
      </header>
      <div>
        {isLoggedIn ? (
          <div>
            <p>Welcome, {username}!</p>
            <button onClick={handleLogout}>Logout</button>
          </div>
        ) : (
          <div>
            <p>Please log in</p>
            <label>
              Username:
              <input
                type="text"
                value={inputUsername}
                onChange={handleUsernameChange}
              />
            </label>
            <br />
            <label>
              Password:
              <input
                type="password"
                value={inputPassword}
                onChange={handlePasswordChange}
              />
            </label>
            <br />
            <button onClick={handleLogin}>Login</button>
            {error && <p style={{ color: 'red' }}>{error}</p>}
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
