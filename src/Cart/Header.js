import React from 'react';
import { ShoppingCart } from '@mui/icons-material';
import { AppBar, Badge, Button, Container, Toolbar, Typography } from '@mui/material';

const Header = ({ count, onCartOpen }) => {
    return (
        <Container>
            <AppBar color='secondary'>
                <Toolbar>
                    <Typography sx={{ flexGrow: 1 }}>ShopNow</Typography>
                    <Button onClick={onCartOpen} color='inherit'>
                        <Badge badgeContent={count} color='primary'>
                            <ShoppingCart />
                        </Badge>
                    </Button>
                </Toolbar>
            </AppBar>
        </Container>
    );
}

export default Header;
