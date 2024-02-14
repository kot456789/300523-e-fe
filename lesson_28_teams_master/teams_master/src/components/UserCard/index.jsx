// Урок от 13.02.2024

import React, { useContext } from 'react'
import s from './index.module.css'
import { Context } from '../../context'

export default function UserCard({ id, user, team }) {

  const { delete_user } = useContext(Context);

  return (
    <div 
      className={s.user_card}
      onClick={() => delete_user(id)}
    >
      <p>{ user }</p>
      <p>{ team }</p>
    </div>
  )
}