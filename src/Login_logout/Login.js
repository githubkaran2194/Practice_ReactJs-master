import { Box, Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const Login = ({onLogin}) => {
    const [username, setUsername] =useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e)=>{
        e.preventDefault();
        if(username === 'admin' && password === 'admin' || username === 'karan' && password === '123    ') {
            onLogin(username);
            alert("success")
        }else{
            alert('error')
        }
    }
  return (
    <>
    <Box sx={{p:"20px"}}>
    <Typography>Login</Typography>
    <form onSubmit={handleSubmit}>
    <TextField label="username" name="username" variant='outlined' margin='dense' fullWidth value={username} onChange={(e)=>setUsername(e.target.value)}/>
    <TextField label="password" name="password" variant='outlined' margin='dense' fullWidth value={password} onChange={(e)=>setPassword(e.target.value)} />
    <Button type='submit' variant='contained'>Login</Button>
    </form>
    </Box>
    </>
  )
}

export default Login
