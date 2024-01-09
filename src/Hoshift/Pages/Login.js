import { Box, Button, Dialog, TextField } from "@mui/material";
import { useEffect, useState } from "react";

function Login() {
    const [isLoggedIn, setLoggedIn] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [open, setOpen] = useState(true);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (username === 'karan' && password === '123' || username === 'karan123' && password === '123') {
            setLoggedIn(true);
            setUsername('');
            setPassword('');
            setOpen(false);
        } else {
            alert('Invalid Username or Password');
        }
    }

    const handleLogOut = () => {
        setLoggedIn(false);
        setUsername('');
        setPassword('');
    }

    return (
        <Dialog open={open} onClose={() => setOpen(false)}>
            <div>
                {
                    isLoggedIn ? (
                        <>
                            Login Successfully {username}
                        </>
                    ) : (
                        <p>Please Login</p>
                    )
                }
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
                        fullWidth
                        variant="standard"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    {
                        isLoggedIn ? (
                            <Button variant="contained" onClick={handleLogOut}>Logout</Button>
                        ) : (
                            <Button variant="contained" type="submit">Login</Button>
                        )
                    }
                </form>
            </Box>
        </Dialog>
    )
}

export default Login;