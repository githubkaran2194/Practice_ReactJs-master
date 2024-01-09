import React from "react";
import { Link, useParams } from "react-router-dom";
import product from "./ProductData";
import { Button, CircularProgress, Paper } from "@mui/material";
import { useState } from "react";
import { useEffect } from "react";

function ProductDetail() {
  const [loading, setLoading] = useState(true);

  const { productId } = useParams();
  const thisProduct = product.find((prod) => prod.id === +productId);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  if (!thisProduct) {
    // Handle the case where the product with the specified ID is not found
    return <div>Product not found</div>;
  }

  return (
   <>
      {loading ? (
        <CircularProgress sx={{m:"250px"}}/>
      ) : (
        <>
        <Paper sx={{ width: "50%", p: "10px  " }}>
          {" "}
          <h1>{thisProduct.name}</h1>
          <img src={thisProduct.image} alt="" height={300} />
          <p>Price: ${thisProduct.price}</p>
          <p>{thisProduct.description}</p>
          <Link to="/">
            <Button variant="contained">Back</Button>
          </Link>
          </Paper>
        </>
      )}
    </>
  );
}

export default ProductDetail;
