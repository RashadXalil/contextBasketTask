import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { useBasketContext } from '../../context/BasketContext'
import { Toaster, toast } from 'react-hot-toast'
import './index.css'
const Index = ({ product }) => {
  const { basketItems, setBasketItems } = useBasketContext()
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
    console.log(basketItems)
  }
  return (
    <React.Fragment>
      <div className="col-lg-3">
        <div className="card">
          <Link to={`detail/${product.id}`}>
            <img
              className="card-img-top"
              src={product.thumbnail}
              alt="Card cap"
            />
          </Link>
          <div className="card-body">
            <h5 className="card-title">{product.name}</h5>
            <p className="card-text">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit,
              ducimus!
            </p>
            <center>
              <button className="btn" onClick={() => addToBasket(product)}>
                Add to Basket
              </button>
            </center>
          </div>
        </div>
      </div>
      <Toaster />
    </React.Fragment>
  )
}

export default Index
