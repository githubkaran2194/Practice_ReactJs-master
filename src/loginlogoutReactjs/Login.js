import React, { useState } from 'react';
import { Alert, AlertTitle, Button, Container, Paper, TextField, CircularProgress, IconButton, InputAdornment } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

const paperStyle = {
  padding: "20px",
  margin: "10px auto",
  width: "300px",
  height: "auto",
  backgroundColor: "rgba(255, 255, 255,0.2)",
  borderRadius: "10px",
  boxShadow: "0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23)"
};

const imgStyle = {
  width: "100%",
  height: "auto",
  borderRadius: "10px",
  boxShadow: "0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23)"
};

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [alert, setAlert] = useState({ open: false, type: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 1000));

      if (username.trim() === 'karan' && password.trim() === '123') {
        onLogin({ username, password });
        setAlert({ open: true, type: 'success', message: 'Login success' });
        setUsername('');
        setPassword('');
      } else {
        setAlert({ open: true, type: 'error', message: 'Invalid username or password' });
      }
    } catch (error) {
      console.error('Login error:', error);
    } finally {
      setLoading(false);
    }
  }

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleCloseAlert = () => {
    setAlert({ ...alert, open: false });
  }

  return (
    <Container>
      <Paper sx={paperStyle}>
        <img src='https://www.savethestudent.org/uploads/Woman-laptop-purple-computer-website-glasses.jpg' alt='A woman working on a laptop' style={imgStyle} />
        <h1 style={{ textAlign: "center", margin: "10px 0px", color: "orange" }}>Login</h1>
        <form onSubmit={handleSubmit}>
          <TextField
            name='username'
            label='Username'
            value={username}
            margin='dense'
            variant='standard'
            fullWidth
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            name='password'
            label='Password'
            type={showPassword ? 'text' : 'password'}
            value={password}
            margin='dense'
            variant='standard'
            fullWidth
            onChange={(e) => setPassword(e.target.value)}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    
                  >
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <Button type='submit' variant='contained' sx={{ mt: "10px" }} fullWidth disabled={loading}>
            {loading ? <CircularProgress size={24} /> : 'Login'}
          </Button>
          <i style={{ textAlign: "center", display: "block", marginTop: "10px", color: "gray" }}>
            Use the default username and password <b style={{ color: "crimson" }}>karan & 123</b>
          </i>
        </form>
      </Paper>
      <Alert
        open={alert.open}
        onClose={handleCloseAlert}
        severity={alert.type}
      >
        <AlertTitle>{alert.message}</AlertTitle>
      </Alert>
    </Container>
  );
}

export default Login;
