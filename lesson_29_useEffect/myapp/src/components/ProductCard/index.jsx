import React, { useContext } from 'react'
import s from './index.module.css'
import { Context } from '../../context';


export default function ProductsCard({id, title, price, brand, images}) {

  const { deleteProduct } = useContext(Context); // удаляем карточку Product

  return (
    <div
    className={s.product_card}
    onClick={() => deleteProduct(id)}    // удаляем карточку Product при клике на карточку
    >                                     
      <img src={images} alt={title} />     
      <p>Title: { title }</p>
      <p>Price: { price }$</p>
      <p>Brand: { brand }</p>
                                       
   </div>                       // image (15 строка) неработает 
  )
}