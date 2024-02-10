import React from 'react'
import s from './index.module.css'

export default function Card({ user, online }) {

  const card_style = {
    backgroundColor: online ? 'lightgreen' : 'lightgray' 
  }

  return (
    <div className={s.card} style={card_style}>
      { user }
    </div>
  )
}