import React from 'react'

export default function ProductCard({ id, title, price}) {
  return (
    <div>
      <p>Title: { title }</p>
      <p>Price: { price }$</p>
    </div>
  )
}