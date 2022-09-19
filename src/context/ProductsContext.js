import axios from 'axios'
import { createContext, useContext, useEffect, useState } from 'react'
const ProductsContext = createContext()
export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([])
  useEffect(() => {
    axios.get('https://dummyjson.com/products').then((res) => {
      setProducts(res.data.products)
    })
  }, [])
  const values = {
    products,
    setProducts,
  }
  return (
    <ProductsContext.Provider value={values}>
      {children}
    </ProductsContext.Provider>
  )
}
export const useProductsContext = () => useContext(ProductsContext)
export default ProductsContext
