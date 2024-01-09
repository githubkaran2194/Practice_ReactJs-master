import React, { useEffect, useState } from 'react';
import { Button, Drawer, Paper, Typography } from '@mui/material';
import { Delete } from '@mui/icons-material';

const CartList = ({ cart, open, onClose }) => {
    const [CART, setCART] = useState([]);

    useEffect(() => {
        setCART(cart);
    }, [cart]);

    const handleIncrement = (index) => {
        if (cart && cart[index]) {
            const updatedCart = [...cart];
            updatedCart[index].quantity++;
            setCART(updatedCart);
        }
    };
    
    const handleDecrement = (index) => {
        if (cart && cart[index] && cart[index].quantity > 1) {
            const updatedCart = [...cart];
            updatedCart[index].quantity--;
            setCART(updatedCart);
        }
    };
    
    const handleDelete = (index) => {
        if (cart && cart[index]) {
            const updatedCart = [...cart];
            updatedCart.splice(index, 1);
            setCART(updatedCart);
        }
    };
    

    const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        <Drawer open={open} onClose={onClose} anchor='right'>
            <div style={{ width: '300px', padding: '16px' }}>
                <Typography variant="h5" gutterBottom>
                    Shopping Cart
                </Typography>
                {cart.length === 0 ? (
                    <Typography variant="body1">Your cart is empty.</Typography>
                ) : (
                    cart.map((item, index) => (
                        <Paper key={index} sx={{ display: 'flex', alignItems: 'center', marginBottom: '10px', p: "10px" }}>
                            <img src={item.image} alt={item.title} width={80} height={80} style={{ marginRight: '16px' }} />
                            <div>
                                <Typography variant="subtitle1">{item.title}</Typography>
                                <Button onClick={() => handleDecrement(index)}>-</Button>
                                <Typography variant="body2">Quantity: {item.quantity} </Typography>
                                <Button onClick={() => handleIncrement(index)}>+</Button>
                                <Typography variant="body2">Price: ${item.price * item.quantity}</Typography>
                                <Button onClick={() => handleDelete(index)}><Delete /></Button>
                            </div>
                        </Paper>
                    ))
                )}
                Total: ${totalPrice}
            </div>
        </Drawer>
    );
}

export default CartList;
