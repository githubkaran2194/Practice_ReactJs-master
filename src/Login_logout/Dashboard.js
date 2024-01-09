import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'

const Dashboard = ({ isLoggedIn, handleLogin, handleLogout, username }) => {
    return (
        <>
            <Box>
                <AppBar>
                    <Toolbar>
                        <Typography sx={{ flexGrow: 1 }}>Dashboard</Typography>{
                            isLoggedIn ? (
                                <>you are in logged &nbsp; <b style={{color:"black"}}> {username}</b> &nbsp;
                                    <Button type='submit' color='error' variant='contained' onClick={handleLogout}>Logout</Button>
                                </>
                            ) :
                                (
                                    <Button type='submit' color='secondary' variant='contained' onClick={handleLogin}>Login</Button>)
                        }
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    )
}

export default Dashboard
