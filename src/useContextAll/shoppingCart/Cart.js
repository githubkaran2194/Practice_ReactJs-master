import React, { useContext, useEffect, useState } from 'react';
import { CartContext } from './CartContext';
import { Button, Card, CardActions, CardContent, Typography } from '@mui/material';

const Cart = () => {
    const { cart, setCart } = useContext(CartContext);

    const [total, setTotal] = useState();

    useEffect(() => {
        setTotal(cart.reduce((acc, curr) => acc + Number(curr.price), 0))
    }, [cart])

    const handleRemove = (id) => {
        const removeCart = cart.filter((item) => item.id !== id);
        setCart(removeCart);
    }
    return (
        <div>
            <Typography variant="h4" gutterBottom>
                Shopping Cart
            </Typography>

            {cart.length === 0 ? (
                <Typography>Your cart is empty.</Typography>
            ) : (
                <>
                    {cart.map((item) => (
                        <Card key={item.id} variant="outlined" style={{ marginBottom: '10px' }}>
                            <CardContent>
                                <Typography variant="h6">{item.name}</Typography>
                                <Typography>Price: ${item.price}</Typography>
                            </CardContent>
                            <CardActions>
                                <Button onClick={() => handleRemove(item.id)}>removeCart</Button>
                            </CardActions>
                        </Card>
                    ))}

                    <Typography variant="h6" style={{ marginTop: '20px' }}>
                        Total Price: ${total}
                    </Typography>

                    <Button variant="contained" color="primary" style={{ marginTop: '10px' }}>
                        Checkout
                    </Button>
                </>
            )}
        </div>
    );
};

export default Cart;
