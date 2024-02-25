import React from 'react'
import s from './index.module.css'
import { Link } from 'react-router-dom'

export default function UserCard({id, image, firstName, lastName }) {
  return (
    <Link to={`/users/${id}`}>
     <div className={s.user_card}>
      <img src={image} alt={`${firstName} ${lastName}`} />
      <p>{ firstName } { lastName }</p>
     </div>
    </Link>
  )
}