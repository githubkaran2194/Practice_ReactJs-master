import { Button, Typography } from '@mui/material'
import React, { useReducer } from 'react'
import { INITIAL_STATE, postReducer } from './postReducer'

const Post = () => {
    const [state, dispatch] = useReducer(postReducer, INITIAL_STATE);

    const handleFetch = () => {
        dispatch({ type: "FETCH_START" });

        fetch('https://jsonplaceholder.typicode.com/posts/1')
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                dispatch({ type: "FETCH_SUCCESS", payload: data });
                console.log(data)
            })
            .catch((error) => {
                dispatch({ type: "FETCH_ERROR", payload: error })
            })
    }
    return (
        <>
            <Button variant='contained' sx={{ m: "20px" }} onClick={handleFetch}>{
                state.loading ? 'Loading...' : 'fetch the data'
            }</Button>
            <Typography>{state.title}</Typography>
            <span>{state.error && 'something went wrong'}</span>
        </>
    )
}

export default Post