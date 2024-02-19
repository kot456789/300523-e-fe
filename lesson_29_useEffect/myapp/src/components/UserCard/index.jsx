import React, { useContext } from 'react'
import s from './index.module.css'
import { Context } from '../../context'

export default function UserCard({ id, name, username, email}) {

  const { deleteUser } = useContext(Context);  // удаляем карточку User

  return (
    <div 
      className={s.user_card}
      onClick={() => deleteUser(id)}   // удаляем карточку User при клике на карточку
    >
      <p>Name: { name }</p>
      <p>Username: { username }</p>
      <a href={`mailto:${email}`}>{ email }</a>
    </div>
  )
}