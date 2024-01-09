// Login.js
import React, { useState } from 'react';
import { Button, Container, Paper, TextField, Typography } from '@mui/material';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';
import { app } from './Firebase';

const Login = () => {
  const auth = getAuth(app);
  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const signIn = async (e) => {
    e.preventDefault();

    try {
      // Basic input validation
      if (!user.email || !user.password) {
        setError('Please fill in all fields.');
        return;
      }

      await signInWithEmailAndPassword(auth, user.email, user.password);
      alert('Login successful!'); // You might want to replace this with a more user-friendly notification
      navigate('/dashboard'); // Redirect to the dashboard or any other route after login
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <Container maxWidth={'xs'}>
      <Paper component={'form'} sx={{ p: '20px' }}>
        <TextField
          value={user.email}
          onChange={handleChange}
          label="Email"
          fullWidth
          margin="dense"
          name="email"
        />
        <TextField
          value={user.password}
          onChange={handleChange}
          label="Password"
          type="password"
          fullWidth
          margin="dense"
          name="password"
        />
        <Button variant="contained" onClick={signIn} type="submit">
          Login
        </Button>
        <Link to='/reset'>
          <Typography>Reset password</Typography>
        </Link>
        {error && (
          <Typography variant="body2" color="error">
            {error}
          </Typography>
        )}
      </Paper>
    </Container>
  );
};

export default Login;
