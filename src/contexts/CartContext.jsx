import React, { useState, useEffect, useMemo, useContext, useCallback } from "react";

const CART = "cart";

const CartContext = React.createContext();
export const useCartContext = () => useContext(CartContext);

export const CartContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(Number(0))
  const cartLocalStorage = localStorage.setItem(CART, cartItems )

  const addCart = useCallback((product) => {
    setCartItems(cartItems + product)
  },[cartItems])


  const value = useMemo(() => ({
    cartItems, addCart
  }),[cartItems, addCart])

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  )
}