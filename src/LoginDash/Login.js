import React, { useState } from 'react';
import { Button, CircularProgress, Paper, TextField } from '@mui/material';

const Login = ({ onLogin }) => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({
    username: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      if (user.username === 'karan' && user.password === '123') {
        onLogin(true);
      } else {
        throw new Error("Invalid username or password");
      }
    } catch (error) {
      alert(error.message + " - login failed");
      setLoading(false);
    }
  };

  return (
    <Paper sx={{ p: "20px", width: "50%", m: "20px auto" }}>
      <form onSubmit={handleLogin}>
        <TextField
          label="username"
          name='username'
          margin='dense'
          value={user.username}
          onChange={handleChange}
          fullWidth
        />
        <TextField
          label="password"
          name='password'
          margin='dense'
          value={user.password}
          onChange={handleChange}
          fullWidth
        />
        <Button type='submit' variant='contained'>
          {loading ? <CircularProgress size={24} /> : "Login"}
        </Button>
      </form>
    </Paper>
  );
};

export default Login;
