import React from 'react'
import { useParams } from 'react-router-dom'
import './index.css'
import { useContext } from 'react'
import ProductsContext, {
  useProductsContext,
} from '../../context/ProductsContext'
const Index = () => {
  let { id } = useParams()
  const { products, setProducts } = useProductsContext()
  const prod = products.find((x) => x.id == id)
  console.log(products)
  console.log(prod)
  return (
    <div className="container app__detail">
      <div className="row">
        <div className="col-lg-4">
          <img src={prod.thumbnail} alt="" />
        </div>
        <div className="col-lg-8">
          <table class="table table-hover table-dark">
            <thead>
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Name</th>
                <th scope="col">Brand</th>
                <th scope="col">Category</th>
                <th scope="col">Price</th>
                <th scope="col">Stock</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">{prod.id}</th>
                <td>{prod.title}</td>
                <td>{prod.brand}</td>
                <td>{prod.category}</td>
                <td>{prod.price}</td>
                <td>{prod.stock}</td>
              </tr>
            </tbody>
          </table>
          <button className="btn btn-primary">Add To Basket</button>
        </div>
      </div>
    </div>
  )
}

export default Index
