import React from 'react'
import s from './index.module.css'
import { Link } from 'react-router-dom'

export default function ProductCard({ id, image, title, price }) {
  return (
    <div className={s.card}>
    <Link to={`/product/${id}`}>
       <img src={image} alt={title} />
        <p>{ title }</p>
        <p>{ price }$</p>
    </Link>
    <div>Add to cart</div>
    </div>
  )
}