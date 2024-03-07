import React from 'react'
import ProductCard from '../ProductCard'
import s from './index.module.css'

export default function ProductsContainer({ productsByCategoryState }) {
  return (
    <div className={s.container}>
      {
        productsByCategoryState.map(el => <ProductCard key={el.id} {...el} />)
      }
    </div>
  )
}