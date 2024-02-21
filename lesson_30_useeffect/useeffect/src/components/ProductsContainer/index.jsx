import React, { useEffect, useState } from 'react'
import { getProductsByCategory } from '../../requests/products';
import { useParams } from 'react-router-dom';
import ProductsCard from '../ProductCard';
import s from './index.module.css'

export default function ProductsContainer() {

  const { category_name } = useParams();

  const [ productsByCategory, setProductsByCategory ] = useState([]);

  useEffect(() => {
    getProductsByCategory(category_name, setProductsByCategory)
  }, []);

  return (
    <div className={s.products_container}>
      {
        productsByCategory.map(el => <ProductsCard key={el.id} {...el} />)
      }
    </div>
  )
}