// Dashboard.js
import React from 'react';
import { AppBar, Button, Container, Toolbar, Typography } from '@mui/material';


const Dashboard = ({ isLoggedIn, handleLogin, handleLogout, username }) => {
  return (
    <Container maxWidth={"md"}>
    <AppBar>
    <Toolbar>
    <Typography variant="h4" gutterBottom sx={{flexGrow:1}}>
    Material-UI Dashboard
  </Typography>
  <Typography gutterBottom>You are logged In {username}</Typography> &nbsp;
  {isLoggedIn ? (
    <div>
      <Button variant="contained" color='error' onClick={handleLogout}>
        Logout
      </Button>
    </div>
  ) : (
    <Button variant="contained" color="success" onClick={handleLogin}>
      Login
    </Button>
  )}
    </Toolbar>
    </AppBar>
     
    </Container>
  );
};

export default Dashboard;
