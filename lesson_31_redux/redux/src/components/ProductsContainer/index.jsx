import React from 'react'
import { useSelector } from 'react-redux'
import ProductCard from '../ProductCard';

export default function ProductsContainer() {

  const products_cards = useSelector(store => store.products);

  return (
    <div>
      {
        products_cards.map(el => <ProductCard key={el.id} {...el} />)
      }
    </div>
  )
}