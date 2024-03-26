import React from 'react'
import s from './index.module.css'
import { decrCountAction, deleteCartItemAction, incrCountAction } from '../../store/reducers/cartReducer'
import { useDispatch } from 'react-redux'

export default function CartItem({ id, image, title, price, count }) {
                   //в  CartItem описываем структуру карточки принимаем:id, image, title, price, count
  const dispatch = useDispatch();  //!

  return (
    <div className={s.card}>
      <img src={image} alt={title} />
      <p>{title}</p>
      <p>{price * count}$</p>
      <div>
        <p>{count}</p>
        <button onClick={() => dispatch(decrCountAction(id))}>-</button>
        <button onClick={() => dispatch(incrCountAction(id))}>+</button> 
      </div>      
      <p onClick={() => dispatch(deleteCartItemAction(id))}>X</p> 
    </div>       //! (строка 20.) удаление мы передаём из cartReducers.js , deleteCartItemAction -это Action. Action работает только через dispatch. dispatch- добавили 8 строка.
  )
}