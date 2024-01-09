import {
  AppBar,
  Badge,
  Box,
  Button,
  CircularProgress,
  Container,
  Dialog,
  Drawer,
  LinearProgress,
  Paper,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Delete, ShoppingCart } from "@mui/icons-material";

const AsyncAwait = () => {
  const [showData, setShowData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [DialogDetails, setDialogDetails] = useState({});
  const [loadingDetails, setLoadingDetails] = useState(true);
  const [count, setCount] = useState(0);
  const [dialogCart, setDialogCart] = useState(false);
  const [cart, setCart] = useState([]);
  const [emptyCart, setEmptyCart] = useState(false);

  const fetchData = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setShowData(data);
      setLoading(false);
    } catch (err) {
      alert("Error fetching data: " + err);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDetails = async (id) => {
    try {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await response.json();
      setOpen(true);
      setDialogDetails(data);
      setLoadingDetails(false);
    } catch (err) {
      alert("Error fetching details: " + err);
      setLoadingDetails(false);
    }
  };

  const handleAddtoCart = (id) => {
    const productInCart = showData.find((item) => item.id === id);
    if (productInCart) {
      setCount(count + 1);
      setCart([...cart, productInCart]);
      setEmptyCart(true);
    }
  };

  const calculateTotal = () => {
    const total = Math.round(cart.reduce((acc, item) => acc + item.price, 0));
    return total.toFixed(2);
  };

  const handleDelete = (id) => {
  const updatedCart = cart.filter((item) => item.id !== id);
  setCart(updatedCart);
  if (updatedCart.length === 0) {
    setEmptyCart(false);
  }else {
    setCount(updatedCart.length);
  }
};

  return (  
    <>
      <Container>
        <AppBar position="fixed">
          <Toolbar>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              E-Commerce Store
            </Typography>
            <Badge
              color="error"
              badgeContent={count}
              variant="standard"
              overlap="circular"
              onClick={() => setDialogCart(true)}
            >
              <ShoppingCart />
            </Badge>
          </Toolbar>
        </AppBar>
      </Container>
      <Toolbar />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          p: "10px",
        }}
      >
        {loading ? (
          <CircularProgress />
        ) : (
          showData.map((item) => (
            <Paper
              key={item.id}
              sx={{
                width: "240px",
                m: "12px 0px",
                p: "20px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <img
                src={item.image}
                alt={item.title}
                style={{ width: "200px" }}
              />
              <Typography variant="h6" sx={{ mt: 1 }}>
                {item.title}
              </Typography>
              <Typography variant="body2">{item.description}</Typography>
              <Button
                variant="contained"
                sx={{ mt: 2 }}
                onClick={() => handleDetails(item.id)}
              >
                More Details
              </Button>
              <Button
                variant="contained"
                sx={{ mt: 1 }}
                onClick={() => handleAddtoCart(item.id)}
              >
                Add To Cart
              </Button>
            </Paper>
          ))
        )}
      </Box>

      <Dialog open={open} onClose={() => setOpen(false)}>
        {loadingDetails ? (
          <LinearProgress />
        ) : (
          <Paper
            sx={{
              width: "240px",
              m: "12px 0px",
              p: "20px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <img
              src={DialogDetails.image}
              alt={DialogDetails.title}
              style={{ width: "200px" }}
            />
            <Typography variant="h6" sx={{ mt: 1 }}>
              {DialogDetails.title}
            </Typography>
            <Typography variant="body2">{DialogDetails.description}</Typography>
            <Typography variant="h6" sx={{ mt: 1 }}>
              ${DialogDetails.price}
            </Typography>
            <Button
              variant="contained"
              sx={{ mt: 1 }}
              onClick={() => handleAddtoCart(DialogDetails.id)}
            >
              Add To Cart
            </Button>
          </Paper>
        )}
      </Dialog>

      <Drawer open={dialogCart} onClose={() => setDialogCart(false)}>
        {emptyCart ? (
          <>
            {cart.map((item) => (
              <Paper
                key={item.id}
                sx={{
                  width: "240px",
                  m: "12px 0px",
                  p: "20px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  style={{ width: "100px" }}
                />
                <Typography variant="h6" sx={{ mt: 1 }}>
                  {item.title}
                </Typography>
                <Typography variant="h6" sx={{ mt: 1 }}>
                  ${item.price}
                </Typography>
                <Button variant="contained" sx={{ mt: 1 }} onClick={()=>handleDelete(item.id)}><Delete/></Button>
              </Paper>
            ))}
            <Typography variant="h6" sx={{ ml: "10px" }}>
              Total / RoundFigure: ${calculateTotal()}
            </Typography>
          </>
        ) : (
          <Paper
            sx={{
              width: "240px",
              m: "12px 0px",
              p: "20px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography variant="h6">Cart is empty</Typography>
          </Paper>
        )}
      </Drawer>
    </>
  );
};

export default AsyncAwait;
