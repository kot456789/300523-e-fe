import React, { useEffect } from 'react'
import { getProductsByCategory } from '../../requests/products';
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import ProductsContainer from '../../components/ProductsContainer';
import { sortProductsAction } from '../../store/reducers/productsByCategoryReducer';

export default function ProductsByCategoryPage() {

  const dispatch = useDispatch();

  const { category } = useParams();

  useEffect(() => {
    dispatch(getProductsByCategory(category))
  }, []);

  const productsByCategoryState = useSelector(store => store.productsByCategory);

  const order = event => {
    dispatch(sortProductsAction(event.target.value))
  }

  return (
    <div>
      <span>Sorted:</span>
      <select onInput={order}>
        <option value='name'>By name (A-Z)</option>
        <option value='price_asc'>By price (ASC)</option>
        <option value='price_desc'>By price (DESC)</option>
      </select>
      <ProductsContainer productsByCategoryState={productsByCategoryState} />
    </div>
  )
}