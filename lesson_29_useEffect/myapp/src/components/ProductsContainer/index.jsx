import React, { useContext } from 'react'
import { Context } from '../../context'
import ProductCard from '../ProductCard';
import s from './index.module.css'

export default function ProductsContainer() {

   const { products } = useContext(Context);

  //  console.log(products)

  return (
    <div className={s.products_container}>
      {
        products.map(el => <ProductCard key={el.id} {...el} />)
      }      
   </div>
  )
}
