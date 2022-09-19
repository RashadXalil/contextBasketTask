import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BasketProvider } from './context/BasketContext'
import { ProductsProvider } from './context/ProductsContext'
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <BasketProvider>
    <ProductsProvider>
      <App />
    </ProductsProvider>
  </BasketProvider>,
)
