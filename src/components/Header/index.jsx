import React from 'react'
import { Link } from 'react-router-dom'
import { useBasketContext } from '../../context/BasketContext'
import './index.css'
const Index = () => {
  const { basketItems, setBasketItems } = useBasketContext()
  return (
    <div className="app__header">
      <div className="app__header__left">Logo</div>
      <div className="app__header__middle">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/shop">Shop</Link>
          </li>
        </ul>
      </div>
      <div className="app__header__right">
        <Link to="/basket" className="app__header__right__item">
          <button type="button" className="btn btn-primary">
            <i className="fa-solid fa-heart"></i>
            <span className="badge badge-light">0</span>
            <span className="sr-only">unread messages</span>
          </button>
        </Link>
        <Link to="/basket" className="app__header__right__item">
          <button type="button" className="btn btn-primary">
            <i className="fa-solid fa-basket-shopping"></i>
            <span className="badge badge-light">{basketItems.length}</span>
            <span className="sr-only">unread messages</span>
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Index
