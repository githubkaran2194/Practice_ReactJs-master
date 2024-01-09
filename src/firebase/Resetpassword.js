import { Box, Button, TextField } from '@mui/material';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import React, { useState } from 'react';
import { app } from './Firebase';

const Resetpassword = () => {
  const auth = getAuth(app);
  const [email, setEmail] = useState('');

  const handleReset = (e) => {
    e.preventDefault();
    sendPasswordResetEmail(auth, email)
      .then(() => {
        alert('Check your email for password reset instructions.');
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <Box component={'form'} onSubmit={handleReset}>
      <TextField
        type='email'  
        label="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Button type='submit'>Reset</Button>
    </Box>
  );
};

export default Resetpassword;
