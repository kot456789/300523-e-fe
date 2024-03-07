import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getSingleProduct } from '../../requests/products';
import { useParams } from 'react-router-dom';
import s from './index.module.css'

export default function SingleProductPage() {

  const dispatch = useDispatch();

  const { id } = useParams();

  useEffect(() => {
    dispatch(getSingleProduct(id))
  }, []);

  const singleProductState = useSelector(store => store.singleProduct);

  const { image, title, description, price, category } = singleProductState;

  return (
    <div className={s.product}>
      <img src={image} alt={title} />
      <div>
        <h3>{ title }</h3>
        <p>{ description }</p>
        <p>{ category }</p>
        <p>Price: <span>{ price }$</span></p>
      </div>
    </div>
  )
}