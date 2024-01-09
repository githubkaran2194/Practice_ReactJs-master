  import { Box, Button, Card, CardContent, Typography } from '@mui/material';
  import React, { useContext } from 'react';
  import { CartContext } from './CartContext';

  const Products = ({ ProductAll }) => {
    const {cart, setCart } = useContext(CartContext);

    const handleCart = (item) => {
      const isPresent = cart.some((product) => product.id === item.id);
      if (!isPresent) {
        setCart((prevCart) => [...prevCart, item]);
      }
    };

    return (
      <Box>
        <Typography variant='h2'>Shopping products</Typography>
        {ProductAll.map((items) => (
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
