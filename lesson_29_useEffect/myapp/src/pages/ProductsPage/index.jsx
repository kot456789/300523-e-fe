import React, { useContext } from 'react'
import ProductsContainer from '../../components/ProductsContainer'
import { Context } from '../../context';

export default function ProductsPage() {

  const { deleteAllProducts } = useContext(Context);

  return (
    <div>
     <ProductsContainer />
      <button onClick={deleteAllProducts}>Delete all products</button>
    </div>
  )
}
