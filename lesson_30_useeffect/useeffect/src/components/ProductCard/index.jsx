import React from 'react'
import s from './index.module.css'
import { Link } from 'react-router-dom'

export default function ProductsCard({ id, title, description, price, image }) {
  return (
    <Link to={`/products/${id}`}>
      <div className={s.product_card}>
        <img src={image} alt={title} />
        <p>Title: { title }</p>
        <p>Description: { description }</p>
        <p>Price: { price }$</p>
      </div>
    </Link>
  )
}