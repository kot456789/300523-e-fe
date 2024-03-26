import React, { useEffect } from 'react'
import CartItemsContainer from '../../components/CartItemsContainer'
import { useDispatch, useSelector } from 'react-redux'
import { clearCartAction } from '../../store/reducers/cartReducer';

export default function CartPage() {

  const dispatch = useDispatch();

  const cartState = useSelector(store => store.cart);

  const totalPrice = cartState.reduce((acc, el) => acc + (el.price * el.count), 0);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartState))
  }, [cartState]);      // о locallstorage 26.03.24

  return (
    <div>
      {
        cartState.length === 0    // 1.если массив = 0 (карточка пуста) , то выводим сообщение The cart is empty
        ? <p>The cart is empty</p>
        : <CartItemsContainer />  //2. в другом случае отрисовываем  CartItemsContainer
      }

      <p>Total: {totalPrice}$</p>
      <button onClick={() => dispatch(clearCartAction())}>
        Clear cart
      </button>
    </div>
  )
}