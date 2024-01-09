// Login.js
import React, { useState } from 'react';
import { Button, Container, TextField, Typography } from '@mui/material';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
e.preventDefault();
if(username === 'karan' && password === '123'){
  alert("success");
  onLogin(username && password);
}else {
  alert("Invalid username or password");
}
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Login
      </Typography>
      <form onSubmit={handleLogin} >
        <TextField
          label="Username"
          variant="outlined"
          fullWidth
          margin="normal"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          fullWidth
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button variant="contained" type='submit'>
          Login
        </Button>
      </form>
    </Container>
  );
};

export default Login;
