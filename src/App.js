import React, { useEffect, useMemo, useState } from "react";
import { productsList, productItem } from "./services/ShopService";
import { Routes, Route } from "react-router-dom";
import { ThemeContextProvider, useThemeContext } from "./contexts/ThemeContext";
import Navbar from "./components/Navbar/Navbar";
import ProductItem from "./views/ProductItem/ProductItem";
import Shop from "./views/Shop/Shop"
import Cart from "./components/Cart/Cart";
import "./App.scss";

function App() {
  const [products, setProducts] = useState([])
  const { theme } = useThemeContext()


  useEffect(() => {
    productsList()
      .then((response) => setProducts(response))
  })



  return (
    <div className={`app bg-${theme}`}>
      <Navbar />
      <Cart />
      <Routes>
        <Route path="/" element={<Shop products={products}/>} />
        <Route path="/:id" element={<ProductItem />} />
      </Routes>
    </div>
  );
}

export default App;
