import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import { Typography, List, CircularProgress, Box } from "@mui/material";
import { Link } from "react-router-dom";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <Box>
      <Typography variant="h4">Product List</Typography>
    { loading ?  <CircularProgress/> :  <List
    sx={{
      justifyContent: "space-between",
      display: "flex",
      flexWrap: "wrap",
    }}
  >
    {products.map((product) => (
      <Card
        key={product.id}
        sx={{
          width: "20%",
          margin: "20px",
          padding: "10px",
          boxSizing: "border-box",
          display:{
            xs:"block",
            sm:"block",
            md:"block",
            lg:"block",
            xl:"block",
            xxl:"block"
          }
        }}
      >
        <CardActionArea component={Link} to={`/product/${product.id}`}>
          <CardMedia
            component="img"
            alt={product.title}
            height="auto"
            image={product.image}
            sx={{ objectFit: "cover" }}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {product.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {`$${product.price}`}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button variant="contained" size="small" component={Link} to={`/product/${product.id}`}>
            More Details
          </Button>
        </CardActions>
      </Card>
    ))}
  </List>} 
     
    </Box>
  );
};

export default ProductList;
