import { Link } from 'react-router-dom';
import './Shop.scss'

const Shop = ({ products }) => {
  return (
    <div className="wrapper">
      <div className="cards">
        {products && products.map(product => {
          return (
            <div key={product.id} className="cards__single">
              <div className="cards__picture">
                <img className="cards__image" src={product.image} alt={product.title} />
              </div>
              <div className="cards__info">
                <h5 className="cards__title">{product.title}</h5>
                <p className="cards__price">{product.price}</p>
                <Link to={`/${product.id}`} className="cards__link">View details</Link>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Shop

