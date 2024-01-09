import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

const App = () => {
  // State for the name and the data array
  const [name, setName] = useState('');
  const [data, setData] = useState([]);
  const [idCounter, setIdCounter] = useState(1);

  useEffect(() => {
    const storedData = localStorage.getItem('data');

    if (storedData) {
      setData(JSON.parse(storedData));
    }
  }, []);

  // Function to handle name input change
  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  // Function to handle adding data to the table and local storage
  const handleAddData = () => {
    if (name.trim() !== '') {
      const newData = [...data, { id: idCounter, name, completed: false }];
      setData(newData);
      setName('');
      setIdCounter(idCounter + 1);

      // Save the updated data to local storage
      localStorage.setItem('data', JSON.stringify(newData));
    }
  };

  // Function to handle deleting a row
  const handleDeleteRow = (id) => {
    const updatedData = data.filter((item) => item.id !== id);
    setData(updatedData);

    // Save the updated data to local storage
    localStorage.setItem('data', JSON.stringify(updatedData));
  };

  return (
    <div>
      <TextField
        label="Name"
        variant="outlined"
        value={name}
        onChange={handleNameChange}
      />
      <Button variant="contained" color="primary" onClick={handleAddData}>
        Add Data
      </Button>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Completed</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.id}</TableCell>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.completed}</TableCell>
                <TableCell>
                  <IconButton
                    color="secondary"
                    onClick={() => handleDeleteRow(item.id)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default App;
