import React, { useState } from 'react';
import {
  AppBar,
  Button,
  Container,
  Menu,
  MenuItem,
  Toolbar,
  Typography
} from '@mui/material';

const Dashboard = ({ handleLogin, handleLogout, isLoggedIn, username }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuOpen = () => {
    setMenuOpen(true);
  };

  const handleMenuClose = () => {
    setMenuOpen(false);
  };

  return (
    <Container>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Dashboard
          </Typography>

          <Button onClick={handleMenuOpen}>
            <img
              src="https://cdn1.iconfinder.com/data/icons/website-internet/48/website_-_male_user-512.png"
              alt="User"
              style={{ width: "50px" }}
            />
          </Button>

          {isLoggedIn ? (
            <Button color="error" variant="contained" onClick={handleLogout}>
              Logout
            </Button>
          ) : (
            <Button color="warning" variant="contained" onClick={handleLogin}>
              Login
            </Button>
          )}
        </Toolbar>

      <Menu
        open={menuOpen}
        onClose={handleMenuClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </Menu>
      </AppBar>
    </Container>
  );
};

export default Dashboard;
