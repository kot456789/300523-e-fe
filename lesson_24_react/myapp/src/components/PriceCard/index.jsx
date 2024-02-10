import React from 'react'
import s from './index.module.css'

export default function PriceCard({ title, cost }) {
  return (
    <div className={s.price_card}>
      <div>
        <p></p>
        <p>{ title }</p>
      </div>
      <p>{ cost }</p>
    </div>
  )
}