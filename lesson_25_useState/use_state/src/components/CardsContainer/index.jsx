import React from 'react'
import Card from '../Card'
import { useState } from 'react'

export default function CardsContainer() {

  const cards_data = [
    {
      id: 1,
      user: 'Olga',
      online: true
    },
    {
      id: 2,
      user: 'Igor',
      online: false
    },
    {
      id: 3,
      user: 'Anna',
      online: true
    },
    {
      id: 4,
      user: 'Fedor',
      online: true
    }
  ]

  const [ cards, setCards ] = useState(cards_data);

  const changeStatus = () => {
    setCards(cards.map(el => {
      el.online = false
      return el
    }))
  }

  return (
    <div>
      {
        cards.map(el => <Card key={el.id} {...el} />)
      }

      <button onClick={changeStatus}>Change status on offline</button>
    </div>
  )
}