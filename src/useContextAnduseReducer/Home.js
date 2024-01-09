import { Button } from "@mui/material";
import React from "react";
import Cart from "./Cart";
import Products from "./Products";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <ul>
        <li>
          <Link to="/cart">
            <Cart/> 
          </Link>  
        </li>
        <li>
          <Link to='/products' >
           <Products/> 
          </Link>
        </li>
      </ul>
    </>
  );
};

export default Home;
