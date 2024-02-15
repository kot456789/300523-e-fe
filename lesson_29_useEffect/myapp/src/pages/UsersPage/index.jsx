import React, { useContext } from 'react'
import UsersContainer from '../../components/UsersContainer'
import { Context } from '../../context'

export default function UsersPage() {

  const { deleteAllUsers } = useContext(Context);

  return (
    <div>
      <UsersContainer />
      <button onClick={deleteAllUsers}>Delete all users</button>
    </div>
  )
}