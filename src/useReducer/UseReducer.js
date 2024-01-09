import { Button } from "@mui/material";
import React, { useReducer } from "react";

const reducer = (state, action) => {
  switch (action) {
    case "Increment":
      return state + 1;
    case "Decrement":
      return state - 1;
    case "reset":
      return initialState; 
      default : return state;
  }
};
const initialState = 0;

const UseReducer = () => {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <h1>{count}</h1>
      <Button
        variant="contained"
        sx={{ m: "10px" }}
        onClick={() => dispatch("Increment")}
      >
        +
      </Button>
      <Button
        variant="contained"
        sx={{ m: "10px" }}
        onClick={() => dispatch("Decrement")}
      >
        -
      </Button>
      <Button
        variant="contained"
        sx={{ m: "10px" }}
        onClick={() => dispatch("reset")}
      >
        reset
      </Button>
    </>
  );
};

export default UseReducer;
