import React from 'react';
import { AppBar, Button, Container, Toolbar, Typography } from '@mui/material';
import Home from './Home';

const Dashboard = ({ isLoggedIn, handleLogout,user }) => {
  return (
    <Container>
      <AppBar>
        <Toolbar>
          <Typography flexGrow={1}>Coders</Typography>
          {isLoggedIn ? (
            <Button variant='contained' color='error' onClick={handleLogout}>
              Logout
            </Button>
          ) : (
            <Button variant='contained' color='secondary'>
              Login
            </Button>
          )}
        </Toolbar>
      </AppBar>
      <Toolbar />
      {isLoggedIn ? <Home/> : null}
    </Container>
  );
};

export default Dashboard;
