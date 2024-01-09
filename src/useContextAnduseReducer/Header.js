import React from 'react';
import { Link } from 'react-router-dom';
import { Badge } from '@mui/material';
import { ShoppingCart } from '@mui/icons-material';

const Header = ({ cart }) => {
  return (
    <ul style={{ display: 'flex', justifyContent: 'center', margin: '10px' }}>
      <li style={{ listStyle: 'none' }}>
        <Link to='/' style={{ textDecoration: 'none', margin: '10px' }}>
          Products
        </Link>
      </li>
      <li style={{ listStyle: 'none' }}>
        <Link to='/cart' style={{ textDecoration: 'none', margin: '10px' }}>
          <Badge badgeContent={cart} variant='standard' color='secondary'>
            <ShoppingCart />
          </Badge>
        </Link>
      </li>
    </ul>
  );
};

export default Header;