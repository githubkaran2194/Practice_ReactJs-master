import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Products from "./Products";
import Cart from "./Cart";
import Header from "./Header";
import { useState } from "react";

const RoutingAll = () => {
  const [cart, setCart] = useState([]);
  const handleAddToCart = (product) => {
    setCart([...cart, {...product, quantity : 1}]);
  };
  return (
    <BrowserRouter>
      <Header cart={cart.length} />
      <Routes>
        <Route
          path="/"
          element={<Products handleAddToCart={handleAddToCart} />}
        />
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutingAll;
