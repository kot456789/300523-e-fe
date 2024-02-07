import React from 'react'
import Card from '../Card'
import s from './index.module.css'

export default function CardsContainer({ cards, delete_card, change_lang }) {
  return (
    <div className={s.cards_container}>
      {
        cards.map(el => <Card key={el.id} {...el} delete_card={delete_card} change_lang={change_lang} />)
      }
    </div>
  )
}