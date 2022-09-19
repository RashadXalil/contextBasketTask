import React from 'react'
import { useParams } from 'react-router-dom'
import './index.css'
import { useBasketContext } from '../../context/BasketContext'
import { useProductsContext } from '../../context/ProductsContext'
import { toast, Toaster } from 'react-hot-toast'
const Index = () => {
  let { id } = useParams()
  const { products, setProducts } = useProductsContext()
  const { basketItems, setBasketItems } = useBasketContext()
  const prod = products.find((x) => x.id == id)
  console.log(id, prod)
  const addToBasket = (item) => {
    const existProd = basketItems.find((x) => x.id === item.id)
    if (existProd) {
      existProd.count += 1
      toast.success('count increased !')
    } else {
      let basketItem = {
        id: item.id,
        name: item.title,
        brand: item.brand,
        category: item.category,
        image: item.thumbnail,
        price: item.price,
        count: 1,
      }
      setBasketItems([...basketItems, basketItem])
      toast.success('item added to basket !')
    }
  }
  return (
    <React.Fragment>
      <div className="container app__detail">
        <div className="row">
          <div className="col-lg-4">
            <img src={prod.thumbnail} alt="" />
          </div>
          <div className="col-lg-8">
            <table className="table table-hover table-dark">
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
            <button
              className="btn btn-primary"
              onClick={() => addToBasket(prod)}
            >
              Add To Basket
            </button>
          </div>
        </div>
      </div>
      <Toaster />
    </React.Fragment>
  )
}

export default Index
