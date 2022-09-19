import React from 'react'
import { useContext } from 'react'
import Card from '../Card'
import './index.css'
import ProductsContext from '../../context/ProductsContext'
import { useProductsContext } from '../../context/ProductsContext'

const Index = () => {
  const { products, setProducts } = useProductsContext()
  return (
    <div className="container card__list">
      <div className="row">
        {products &&
          products.map((product) => {
            return <Card key={product.id} product={product} />
          })}
      </div>
    </div>
  )
}

export default Index
