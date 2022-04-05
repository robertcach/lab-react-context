import { useParams } from "react-router"
import { useEffect, useState } from "react";
import { productItem } from "../../services/ShopService";
import { useCartContext } from "../../contexts/CartContext";
import './ProductItem.scss'

const ProductItem = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { cartItems, addCart } = useCartContext()

  useEffect(() => {
    productItem(id)
      .then((response) => setProduct(response))
  },[id])

  const handleSubmit = () => {
/*     const { price, image } = product
    addCart(product) */
    
    const productToAdd = product.price
    addCart(productToAdd) 
  }

  return (
    <div className="py-5">
      {product ? (
        <div className="wrapper">
          <div className="product-card">
            <div className="product-card__picture">
              <img className="product-card__image" src={product.image} alt={product.title} />
            </div>
            <div className="product-card__info">
              <h5 className="product-card__title">{product.title}</h5>
              <p className="product-card__description">{product.description}</p>
              <p className="product-card__price">{product.price}€</p>
              <button onClick={handleSubmit}>Add to cart</button>
            </div>
          </div>
        </div>
      ):
      'loading...'
      }
    </div>
  )
}

export default ProductItem