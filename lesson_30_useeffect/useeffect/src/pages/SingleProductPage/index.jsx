import React, { useEffect, useState } from 'react'
import { getSingleProduct } from '../../requests/products';
import { Link, useParams } from 'react-router-dom';
import s from './index.module.css'

export default function SingleProductPage() {

  const [ singleProduct, setSingleProduct ] = useState({});

  const { product_id  } = useParams();

  useEffect(() => getSingleProduct(product_id, setSingleProduct), []);

  const { image, title, description, price, category } = singleProduct;

  return (
    <div className={s.single_product}>
      <img src={image} alt={title} />
      <div>
        <p>{ title }</p>
        <p>{ description }</p>
        <p>{ price }$</p>
        <Link to={`/categories/${category}`}>
          <div>{ category }</div>
        </Link>
      </div>
    </div>
  )
}