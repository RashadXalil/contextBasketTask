import React, { useContext } from 'react'
import SliderList from '../../components/SliderList'
import CardList from '../../components/CardList'
import { useBasketContext } from '../../context/BasketContext'
import { useProductsContext } from '../../context/ProductsContext'

import './index.css'
const Index = () => {
  return (
    <div>
      <SliderList />
      <CardList />
    </div>
  )
}

export default Index
