import React from 'react'
import s from './index.module.css'

export default function UserCard({ image, firstName, lastName }) {
  return (
    <div className={s.user_card}>
      <img src={image} alt={`${firstName} ${lastName}`} />
      <p>{ firstName } { lastName }</p>
    </div>
  )
}