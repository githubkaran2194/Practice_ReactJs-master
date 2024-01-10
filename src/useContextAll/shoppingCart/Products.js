import { Box, Button, Card, CardContent, Typography } from '@mui/material';
import React, { useContext, useEffect } from 'react';
import { CartContext } from './CartContext';

const Products = () => {
  const { cart, setCart } = useContext(CartContext);

  const fetchData = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      setCart(data);
    } catch (err) {
      console.log(err)
    }
  }
  const handleCart = (item) => {
    const isPresent = cart.some((product) => product.id === item.id);
    if (!isPresent) {
      setCart((prevCart) => [...prevCart, item]);
    }
  };

  useEffect(() => {
    fetchData();
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(storedCart);

    return () => {
      localStorage.setItem('cart', JSON.stringify(cart));
    };

  }, []);
  
  return (
    <Box>
      <Typography variant='h2'>Shopping products </Typography>
      {cart.map((items) => (
        <Card key={items.id} sx={{ m: '10px' }}>
          <CardContent>
            <Typography variant='h6'>{items.name}</Typography>
            <Typography>Price: ${items.price}</Typography>
            <Button onClick={() => handleCart(items)}>Add to Cart</Button>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};

export default Products;
