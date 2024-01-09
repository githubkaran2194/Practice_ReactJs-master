import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from "@mui/material";
import React from "react";
import { useState } from "react";
import ProductData from "./ProductData";
import { ShoppingCart } from "@mui/icons-material";

const Products = ({handleAddToCart}) => {
  const [product, setProduct] = useState(ProductData);
  return (
    <>
      <Container>
        <Box sx={{flexWrap:"wrap", display:"flex", justifyContent:"center"}}>
          {product.map((item) => (
            <Card sx={{width:"300px", m:"5px" }} key={item.id}>
              <CardMedia component={"img"} src={item.image} sx={{objectFit:"contain"}} height={140} />
              <CardContent>
                <Typography>{item.title}</Typography>
                <Typography>{item.price}</Typography>
                <CardActions>
                  <Button onClick={()=>handleAddToCart(item)}>
                    <ShoppingCart />
                  </Button>
                </CardActions>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Container>
    </>
  );
};

export default Products;
