import React from 'react'
import Products from './Products.js'
import Cart from './Cart'
import { CartProvider } from './CartContext.js';
const DispalyData = () => {
  const ProductAll = [
    {
      id: 1,
      name: "iphone",
      price: "638833",
    },
    {
      id: 2,
      name: "macbook",
      price: "45833",
    },
    {
      id: 3,
      name: "iphone xr",
      price: "345436",
    },
    {
      id: 4,
      name: "iphone 11",
      price: "70988",
    },
    {
      id: 5,
      name: "iphone 12",
      price: "638833",
    },
    {
      id: 6,
      name: "iphone 13",
      price: "87988",
    }
  ];


  return (
    <CartProvider>
      <div style={{ margin: "70px" }}>
        <Products ProductAll={ProductAll} />
        <hr />
        <Cart />
      </div>
    </CartProvider>
  )
}

export default DispalyData