import { Add, Delete, Remove } from '@mui/icons-material'
import { Box, Card, CardContent, CardMedia, IconButton, Typography } from '@mui/material'
import React from 'react'

const Cart = ({ cart, setCart }) => {
  const handleRemove = (id) => {
    const removeCart = cart.filter((item) => item.id !== id)
    setCart(removeCart);
  }

  const handleDecrease = (id) => {
const decrease = cart.map((item)=>item.id === id  && item.quantity >  1 ?{...item, quantity :  item.quantity-1} : item)
setCart(decrease)
  }
  const handleIncrease = (id) => {
    const incr = cart.map((item) => item.id === id ? { ...item, quantity: item.quantity + 1} : item)
    setCart(incr)
  }
  return (
    <>
      <Box display="flex" flexDirection="column" alignItems="center">
      {cart.length ===0 ? <h1>Cart is empty</h1> : cart.map((item) => (
        <Card key={item.id} sx={{ m: '10px', width: '300px' }}>
          <CardMedia
            src={item.image}
            component={'img'}
            height={150}
            sx={{ objectFit: 'contain', p: '5px' }}
          />
          <CardContent sx={{ textAlign: 'center' }}>
            <Typography variant="h6" mb={1}>
              {item.title}
            </Typography>
            <Typography variant="subtitle1">${item.price}</Typography>
            <Typography variant="subtitle1">Quantity: {item.quantity}</Typography>
            <IconButton color='error' onClick={() => handleRemove(item.id)}>
              <Delete />
            </IconButton>
          </CardContent>
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <IconButton variant="outlined" onClick={() => handleDecrease(item.id)}>
              <Remove />
            </IconButton>
            <Typography variant="body1" sx={{ marginX: '10px' }}>
              {item.quantity}
            </Typography>
            <IconButton variant="outlined" onClick={() => handleIncrease(item.id)}>
              <Add />
            </IconButton>
          </Box>

        </Card>
      ))}
        
       {
        cart.length === 0 ?  null :  <Typography variant='h4'>Total {cart.map(item => item.price * item.quantity).reduce((total, value)=>total+value,0)}</Typography> 
       }
      </Box>
    </>
  )
}

export default Cart