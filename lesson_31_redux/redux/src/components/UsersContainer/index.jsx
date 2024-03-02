import React from 'react'
import UserCard from '../UserCard'
import { useSelector } from 'react-redux'

export default function UsersContainer() {

  const usersCards = useSelector(store => store.users);

  return (
    <div>
      {
        usersCards.map(el => <UserCard key={el.id} {...el} />)
      }
    </div>
  )
}