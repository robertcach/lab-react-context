import { useCartContext } from "../../contexts/CartContext";
import './Cart.scss'

const Cart = () => {
  const { cartItems } = useCartContext()

  const totalCart = () => {
    return cartItems.reduce((acc, product) => {
      return acc + product.price
    }, 0)
  }

  /* console.log(cartItems) */

  return (
    <div className="cart-item">
    {cartItems && cartItems.map(cartItem => {
      return (
        <div key={cartItem.id} className="cart-item__wrapper">
          <p className="cart-item__title"><strong>{cartItem.title}</strong></p>
          <p className="cart-item__price">{cartItem.price}€</p>
        </div>
      )
    })}
    <h2 className="cart-item__total">Total: {totalCart()}€</h2>
    </div>
  )
}

export default Cart