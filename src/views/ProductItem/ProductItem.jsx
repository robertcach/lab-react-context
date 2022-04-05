import { useParams } from "react-router"
import { useEffect, useState } from "react";
import { productItem } from "../../services/ShopService";

const ProductItem = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null)

  useEffect(() => {
    productItem(id)
      .then((response) => setProduct(response))
  },[id])

  return (
    <div>
      {product ? (
        <div>
          <div className="cards__picture">
                  <img className="cards__image" src={product.image} alt={product.title} />
                </div>
                <div className="cards__info">
                  <h5 className="cards__title">{product.title}</h5>
                  <p className="cards__price">{product.price}</p>
                </div>
        </div>

      ):
      'loading'
      }
    </div>
  )
}

export default ProductItem