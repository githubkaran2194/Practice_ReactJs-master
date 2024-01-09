import { Container, Paper, TextField, Button, Chip } from '@mui/material';
import React, { useReducer } from 'react'
import { INITIAL_STATE, formReducer } from './formReducer';

const Form = () => {

    const [state, dispatch] = useReducer(formReducer, INITIAL_STATE);

    const handleChange = e => {
        dispatch({ type: "CHANGE_INPUT", 
        payload: { name:e.target.name, value: e.target.value } })
    }
    console.log(state)
    return (
        <Container sx={{mt:"20px"}}>
            <Paper component={'form'} sx={{p:"10px"}}>
                <TextField
                    label="Title"
                    name="title"
                    value={state.title}
                    onChange={handleChange}
                    fullWidth
                    margin='dense'
                />
                <TextField
                    label="Price"
                    name="price"
                    type="number"
                    value={state.price}
                    fullWidth
                    margin='dense'
                    onChange={handleChange}
                />
                <TextField
                    label="Description"
                    name="desc"
                    multiline
                    rows={4}
                    value={state.desc}
                    fullWidth
                    margin='dense'
                    onChange={handleChange}
                />

                

                <Button variant="contained" >
                    Add Tag
                </Button>

                <TextField
                    label="Quantity"
                    name="quantity"
                    type="number"
                    value={state.quantity}
                    fullWidth
                    margin='dense'
                    onChange={handleChange}
                />

                <Button variant="contained"  onClick={()=>dispatch({type:"INCREMENT"})}>
                    Increment
                </Button>

                <Button variant="contained" onClick={()=>dispatch({type:"DECREMENT"})}>
                DECREMENT
                </Button>
            </Paper>
        </Container>
    )
}

export default Form