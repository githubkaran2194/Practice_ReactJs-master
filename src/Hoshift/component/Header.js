import { AppBar, Box, Button, Dialog, Drawer, IconButton, TextField, Toolbar, Typography } from '@mui/material';
import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import '../component/Header.css';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import logo from '../HO-LOGO-TRANSPARANT.png';
import mobileLogo from '../mobile-logo.png';
import Login from '../Pages/Login';
import { Visibility, VisibilityOff } from '@mui/icons-material';

const Header = () => { 
    const [mobileOpen, setMobileOpen] = useState(false);
    const [isLoggedIn, setLoggedIn] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [open, setOpen] = useState(false);
    const [error, setError] = useState(false);
    const [showPassword, setShowPassword] = useState(false);



    const handleLogin = () => {
        setOpen(true);
        setError(true);
    };

    const handleLogout = () => {
        setLoggedIn(false);
        setOpen(false);
    };

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (username === 'karan' && password === 'karan') {
            setLoggedIn(true);
            setUsername('');
            setPassword('');
            setOpen(false);
            setError(false)
        } else {
            setError(true)
        }
    };

    const handleLogOut = () => {
        setLoggedIn(false);
        setUsername('');
        setPassword('');
    };

    const drawer = (
        <Box sx={{ textAlign: 'center' }} onClick={handleDrawerToggle}>
            <Typography variant='h6' component={'div'} sx={{ cursor: 'pointer', color: 'black', flexGrow: 1 }}>
                <Link to='/'>
                    <img src={mobileLogo} alt="mobile-logo" className='mobile-logo' />
                </Link>
            </Typography>
            <hr />
            <ul className='mobile-navigation'>
                <li>
                    <Link to={'/overview'}>Overview</Link>
                </li>
                <li>
                    <Link to={'/support'}>Support</Link>
                </li>
                <li>
                    <Link to={'/guide'}>Guide</Link>
                </li>
                <li>
                    <Button variant='contained' component={Link} to='/login' sx={{ color: "white", backgroundColor: "#039be5" }}> Login</Button>
                </li>
            </ul>
        </Box>
    );

    return (
        <>
            <Box>
                <AppBar component={'nav'} sx={{ bgcolor: "lightgray" }}>
                    <Toolbar>
                        <IconButton edge="start" color='inherit' aria-label='open drawer' sx={{
                            mr: 2,
                            display: { sm: 'none' }
                        }} onClick={handleDrawerToggle}>
                            <Link to="/">
                                <MenuIcon sx={{ color: 'white' }} />
                            </Link>
                        </IconButton>
                        <Typography variant='h6' component={'div'} sx={{ cursor: 'pointer', color: 'white', flexGrow: 1 }}>
                            <Link to={'/'} style={{ color: "orange", textDecoration: 'none' }}>
                                <img src={logo} alt="logo" className="nav-logo" />
                            </Link>
                        </Typography>
                        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                            <ul className='navigation-menu'>
                                <li>
                                    <Link to={'/overview'}>Overview</Link>
                                </li>
                                <li>
                                    <Link to={'/support'}>Support</Link>
                                </li>
                                <li>
                                    <Link to={'/guide'}>Guide</Link>
                                </li>
                            </ul>
                        </Box>
                        {isLoggedIn ? (
                            <Button variant="contained" type='submit' onClick={handleLogout}>Logout</Button>
                        ) : (
                            <Button variant="contained" type="button" onClick={handleLogin}>Login</Button>)
                        }
                    </Toolbar>
                </AppBar>
                <Box component={'nav'}>
                    <Drawer variant="temporary" anchor={"left"} open={mobileOpen} onClose={handleDrawerToggle}
                        sx={{
                            display: { xs: 'block', sm: 'none' },
                            "& .MuiDrawer-paper ": {
                                width: "30vh",
                                boxSizing: "border-box"
                            }
                        }}>
                        {drawer}
                    </Drawer>
                </Box>
                <Toolbar></Toolbar>
            </Box>

            <Dialog open={open} onClose={() => setOpen(false)}>
                <div>
                    {isLoggedIn ? (
                        <>Login Successfully {username}</>
                    ) : (
                        <p>Please Login</p>
                    )}
                </div>
                <Box sx={{ p: "10px" }}>
                    <form onSubmit={handleSubmit}>
                        <TextField
                            name="name"
                            label="Username"
                            margin="dense"
                            fullWidth
                            variant="standard"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <TextField
                            name="password"
                            label="Password"
                            margin="dense"
                            type='password'
                            fullWidth
                            variant="standard"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <TextField
                            name="password"
                            label="Password"
                            margin="dense"
                            fullWidth
                            variant="standard"
                            type={showPassword ? "text" : "password"}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            InputProps={{
                                endAdornment: (
                                    <IconButton
                                        onClick={() => setShowPassword(!showPassword)}
                                        edge="end"
                                    >
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                ),
                            }}
                        />





                        {isLoggedIn ? (
                            <Button variant="contained" onClick={handleLogOut}>Logout</Button>
                        ) : (
                            <Button variant="contained" type="submit">Login</Button>
                        )}
                        {
                            error ? (
                                <p style={{ color: "red" }}>Invalid Username or Password</p>
                            ) : (
                                <p style={{ color: "green" }}>Successfully</p>

                            )
                        }
                    </form>
                </Box>
            </Dialog>
        </>
    );
};

export default Header;
