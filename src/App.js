import React, { useEffect, useState } from "react";
import { productsList } from "./services/ShopService";
import { Routes, Route } from "react-router-dom";
import { useThemeContext } from "./contexts/ThemeContext";
import Navbar from "./components/Navbar/Navbar";
import ProductItem from "./views/ProductItem/ProductItem";
import ProductsList from "./views/ProductsList/ProductsList"
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
        <Route path="/" element={<ProductsList products={products}/>} />
        <Route path="/:id" element={<ProductItem />} />
      </Routes>
    </div>
  );
}

export default App;
