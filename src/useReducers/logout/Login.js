import { Button, Container, Paper, TextField, Typography } from '@mui/material';
import React, { useReducer } from 'react';
import { INITIAL_STATE, loginReducer } from './loginReducer';

const Login = () => {
    const [state, dispatch] = useReducer(loginReducer, INITIAL_STATE);

    const handleChange = (e) => {
        const { name, value } = e.target;
        dispatch({ type: 'INPUT_CHANGE', payload: { name, value } });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (state.username === 'admin' && state.password === 'admin') {
            dispatch({ type: 'HANDLE_SUBMIT' });
        } else {
            dispatch({ type: 'ERROR', payload: 'Invalid credentials' });
        }
    };

    return (
        <Container>
            {state.loggedIn ? (
                <>
                    <Typography variant="h5">Welcome back, {state.username}!</Typography>
                    <Button onClick={() => dispatch({ type: 'LOGOUT' })}>LOGOUT</Button>
                </>
            ) : (
                <Paper component="form" onSubmit={handleSubmit}>
                    <TextField
                        label="username"
                        name="username"
                        fullWidth
                        margin="dense"
                        value={state.username}
                        onChange={handleChange}
                    />
                    <TextField
                        label="password"
                        name="password"
                        fullWidth
                        margin="dense"
                        value={state.password}
                        onChange={handleChange}
                        type="password"
                    />
                    <Button type="submit">Submit</Button>
                </Paper>
            )}
            {
                state.error && <Typography>{state.error}</Typography>
            }
        </Container>
    );
};

export default Login;
