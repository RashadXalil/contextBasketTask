import { createContext, useContext, useState } from 'react'

const BasketContext = createContext()

export const BasketProvider = ({ children }) => {
  const [basketItems, setBasketItems] = useState([])

  const values = {
    basketItems,
    setBasketItems,
  }

  return (
    <BasketContext.Provider value={values}>{children}</BasketContext.Provider>
  )
}

export const useBasketContext = () => useContext(BasketContext)
export default BasketContext
