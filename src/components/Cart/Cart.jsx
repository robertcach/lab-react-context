import { useCartContext } from "../../contexts/CartContext"

const Cart = () => {
  const { cartItems } = useCartContext()

  return (
    <div>
      {cartItems}
    </div>
  )
}

export default Cart