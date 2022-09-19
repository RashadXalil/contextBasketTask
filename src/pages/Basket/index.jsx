import React from 'react'
import { useBasketContext } from '../../context/BasketContext'
import './index.css'
const Index = () => {
  const { basketItems, setBasketItems } = useBasketContext()
  const deleteHandler = (item) => {
    const target = basketItems.find((x) => x.id === item.id)
    const indexOfTarget = basketItems.indexOf(target)
    if (target.count > 1) {
      target.count -= 1
      setBasketItems([...basketItems])
    } else {
      basketItems.splice(indexOfTarget, 1)
      setBasketItems([...basketItems])
    }
  }
  return (
    <table className="table table-hover">
      <thead>
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Product</th>
          <th scope="col">Count</th>
          <th scope="col">Total Price</th>
          <th scope="col">Remove</th>
        </tr>
      </thead>
      <tbody>
        {basketItems &&
          basketItems.map((basketItem) => {
            return (
              <tr>
                <th scope="row">{basketItem.id}</th>
                <td>{basketItem.name}</td>
                <td>{basketItem.count}</td>
                <td>{basketItem.price}</td>
                <td>
                  <button
                    className="btn btn-danger text-light"
                    onClick={() => deleteHandler(basketItem)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            )
          })}
      </tbody>
    </table>
  )
}

export default Index
