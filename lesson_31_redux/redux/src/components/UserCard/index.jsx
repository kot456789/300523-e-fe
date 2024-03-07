import React from 'react'
import s from './index.module.css'
import { decrementAgeAction, deleteUserAction, incrementAgeAction } from '../../store/reducers/usersReducer'
import { useDispatch } from 'react-redux'


export default function UserCard({ id, firstname, age }) {

  const dispatch = useDispatch();

  return (
    <div className={s.user_card}>
      <p onClick={() => dispatch(deleteUserAction(id))}>
        X
      </p>
      <p>Name: { firstname }</p>
      <p>Age: { age }</p>
      <div>
        <button onClick={() => dispatch    /*уменьшаем age при клике на на кнопку с минусом */
        (decrementAgeAction(id))}>-</button>   
        <button onClick={() => dispatch   /*увеличиваем age при клике на на кнопку с плюсом */
        (incrementAgeAction(id))}>+</button>
      </div>
    </div>
  )
}
