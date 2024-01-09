import { Box, Button, Container, Paper, TextField, Typography } from '@mui/material';
import React, { useEffect, useReducer } from 'react'
import { INITIAL_STATE, todoReducer } from './todoRedcuer';
const ToDo = () => {
  const [todos, dispatch] = useReducer(todoReducer, INITIAL_STATE);

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch({ type: 'INPUT_CHANGE', payload: { name, value } });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todos.name.trim() === '' || todos.email.trim() === '' || todos.message.trim() === '') {
    alert('Please fill all the fields');
  } else {
    dispatch({ type: 'HANDLE_SUBMIT'});
  }
  };

  useEffect(() => {

    console.log(todos);
  }, [todos]);

  const handleDelete = (item) => {
    dispatch({ type: 'REMOVE_ITEM', payload: { item } });
};
  return (
    <Container sx={{ mt: '20px' }}>
      <Paper sx={{ p: '20px' }}>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Name"
            name="name"
            value={todos.name}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />

          <TextField
            label="Email"
            name="email"
            value={todos.email}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />

          <TextField
            label="Message"
            name="message"
            multiline
            rows={4}
            value={todos.message}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />

          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </form>
      </Paper>

      <Box>
        <Typography>Todo List: {todos.todos.length}</Typography>
        {todos.todos.map((item) => (
          <Paper key={item.id}>
            <Typography>{item.name}</Typography>
            <Typography>{item.email}</Typography>
            <Typography>{item.message}</Typography>
            <Button onClick={()=>handleDelete(item)}>Remove</Button>
          </Paper>
        ))}
      </Box>
    </Container>
  );
};

export default ToDo;
