import React, { useEffect } from 'react'
import { getProductsByCategory } from '../../requests/products';
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import ProductsContainer from '../../components/ProductsContainer';

export default function ProductsByCategoryPage() {

  const dispatch = useDispatch();

  const { category } = useParams();

  useEffect(() => {
    dispatch(getProductsByCategory(category))
  }, []);

  const productsByCategoryState = useSelector(store => store.productsByCategory);

  return (
    <div>
      <ProductsContainer productsByCategoryState={productsByCategoryState} />
    </div>
  )
}