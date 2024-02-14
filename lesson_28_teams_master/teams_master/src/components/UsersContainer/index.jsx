/* Урок от 13.02.2024*/

import React, { useContext } from 'react'
import UserCard from '../UserCard'
import { Context } from '../../context';

export default function UsersContainer() {

  const { users } = useContext(Context);

  return (
    <div>
      {
        users.length === 0
        ? <p>No users</p>
        : users.map(el => <UserCard key={el.id} {...el} />)
      }
    </div>
  )
}