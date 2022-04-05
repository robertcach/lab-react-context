import { useParams } from "react-router"

const ProductItem = () => {
  const { id } = useParams()


  return (
    <div>
      {id}
    </div>
  )
}

export default ProductItem