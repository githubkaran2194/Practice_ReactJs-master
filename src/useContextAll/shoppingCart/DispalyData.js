import React from 'react'
import Products from './Products.js'
import Cart from './Cart'
import { CartProvider } from './CartContext.js';
const DispalyData = () => {

  return (
    <CartProvider>
      <div style={{ margin: "70px" }}>
        <Products />
        <hr />
        <Cart />
      </div>
    </CartProvider>
  )
}

export default DispalyData