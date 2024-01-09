import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, Button, CardActions, Grid } from '@mui/material';

const ProductList = ({ products, addToCart }) => {
  return (
    <>
    <Grid container >
      {products.map((product, index) => (
        <Grid item xs={12} sm={4}  key={index} 
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        padding: '20px'
      }}>
        <Card sx={{marginBottom: '16px'}}>
          <CardMedia
            component="img"
            height="140"
            alt={product.title}
            image={product.image}
            sx={{ boxSizing: "border-box" }}
          />
          <CardContent>
            <Typography variant="h6">{product.title}</Typography>
            <Typography variant="body2" color="textSecondary">
              {product.description}
            </Typography>
            <Typography variant="subtitle1">Price: ${product.price}</Typography>
          </CardContent>
          <CardActions>
          <Button variant='contained' onClick={()=>addToCart(product)}>Add To Cart</Button>
          </CardActions>
        </Card>
        </Grid>
      ))}
    </Grid>


    </>
      );
};

export default ProductList;
