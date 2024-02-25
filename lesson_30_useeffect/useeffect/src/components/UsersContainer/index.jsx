import React, { useContext } from 'react'
import s from './index.module.css'
import { Context } from '../../context'
import UserCard from '../UserCard';

export default function UsersContainer() {

  const { users } = useContext(Context);

  return (
    <div className={s.users_container}>
      {
        users.map(el => <UserCard key={el.id} {...el} />)
      }
    </div>
  )
}