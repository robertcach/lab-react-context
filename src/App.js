import React, { useEffect, useState } from 'react';
import { productsList } from './services/ShopService';
import { Routes, Route } from 'react-router-dom';
import Shop from './views/Shop/Shop.jsx'
import './App.scss';
import Cart from './components/Cart/Cart';

function App() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    productsList()
      .then((response) => setProducts(response))
  })

  return (
    <div className="app">
      <Cart />
      <Routes>
        <Route path="/" element={<Shop products={products}/>} />
        <Route path="/:id" element={<Shop products={products}/>} />
      </Routes>
    </div>
  );
}

export default App;
