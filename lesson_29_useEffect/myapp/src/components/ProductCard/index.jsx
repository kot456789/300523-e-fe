import React, { useContext } from 'react'
import s from './index.module.css'
import { Context } from '../../context';


export default function ProductCard({id, title, price, brand}) {

  const { deleteProduct } = useContext(Context);

  return (
    <div
    className={s.product_card}
    onClick={() => deleteProduct(id)}
    >
      <p>Title: { title }</p>
      <p>Price: { price }</p>
      <p>Brand: { brand }</p>
      
   </div>
  )
}
