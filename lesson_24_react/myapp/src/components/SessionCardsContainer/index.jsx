import React from 'react'
import session_img from './session_card.png'
import SessionCard from '../SessionCard'
import s from './index.module.css'

export default function SessionCardsContainer() {

  const sessionCards = [
    {
      id: 1,
      title: 'Стандартный RitmStyle',
      img: session_img
    },
    {
      id: 2,
      title: 'RitmStyle для пар',
      img: session_img
    },
    {
      id: 3,
      title: 'RitmStyle для беременных',
      img: session_img
    },
    {
      id: 4,
      title: 'RitmStyle с полным погружением под воду',
      img: session_img
    },
    {
      id: 5,
      title: 'RitmStyle + красочная подводная фотосессия',
      img: session_img
    }
  ]

  return (
    <div className={s.sessions_container}>
      {
        sessionCards.map(el => <SessionCard key={el.id} {...el} />)
      }
    </div>
  )
}