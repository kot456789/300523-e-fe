import React from 'react'

export default function Product({ title, description, price, discount }) {
  return (
    <div>
      <p>Title: {title}</p>
      <p>Description: {description}</p>
      <p>Price: {price}$</p>
      <p>Discount: {discount}%</p>
    </div>
  )
}