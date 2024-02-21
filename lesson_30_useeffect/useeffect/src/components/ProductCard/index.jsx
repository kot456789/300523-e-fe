import React from 'react'
import s from './index.module.css'

export default function ProductsCard({ title, description, price, image }) {
  return (
    <div className={s.product_card}>
      <img src={image} alt={title} />
      <p>Title: { title }</p>
      <p>Description: { description }</p>
      <p>Price: { price }$</p>
    </div>
  )
}