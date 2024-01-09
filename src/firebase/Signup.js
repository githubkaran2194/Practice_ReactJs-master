// Signup.js
import React, { useState } from 'react';
import { Button, Container, Paper, TextField, Typography } from '@mui/material';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { app } from './Firebase';

const Signup = () => {
  const auth = getAuth(app);
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    number: '',
  });

  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const signUp = async (e) => {
    e.preventDefault();

    try {
      // Basic input validation
      if (!user.name || !user.email || !user.password || !user.number) {
        setError('Please fill in all fields.');
        return;
      }

      await createUserWithEmailAndPassword(auth, user.email, user.password);
      alert('Signup successful!'); // You might want to replace this with a more user-friendly notification
      navigate('/login');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <Container maxWidth={'xs'}>
      <Paper component={'form'} sx={{ p: '20px' }}>
        <TextField
          value={user.name}
          onChange={handleChange}
          label="Name"
          fullWidth
          margin="dense"
          name="name"
        />
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
        <TextField
          value={user.number}
          onChange={handleChange}
          label="Number"
          type="number"
          fullWidth
          margin="dense"
          name="number"
        />
        <Button variant="contained" onClick={signUp} type="submit">
          Signup
        </Button>

        {error && (
          <Typography variant="body2" color="error">
            {error}
          </Typography>
        )}
      </Paper>
    </Container>
  );
};

export default Signup;
