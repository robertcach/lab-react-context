import React, { useState, useEffect, useContext } from "react";

const CartContext = React.createContext();
export const useCartContext = () => useContext(CartContext);

export const CartContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(null)

  const carProductsLocalStorage = localStorage.getItem('cartProducts')
  const actualPrice = localStorage.getItem()

  useEffect(() => {
    localStorage.setItem('cartProducts', JSON.stringify(cartItems))
  })


  return (
    <div>

    </div>
  )
}