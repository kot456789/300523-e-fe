import React from 'react'
import PriceCard from '../PriceCard'
import s from './index.module.css'

export default function PriceCardsContainer() {

  const price_data = [
    {
       id: 1,
       title: 'RitmStyle с погружением',
       cost: `1000р.`
    },
    {
       id: 2,
       title: 'Абонемент на RitmStyle',
       cost: `5500р.`
    },
    {
       id: 3,
       title: 'RitmStyle для пар',
       cost: `6000р.`
    },
    {
       id: 4,
       title: 'RitmStyle для беременных',
       cost: `13500р.`
    },
    {
       id: 5,
       title: 'RitmStyle +  фотосессия',
       cost: `11500р.`
    },
 ]

  return (
    <div className={s.price_container}>
      {
        price_data.map(el => <PriceCard key={el.id} {...el} />)
      }
    </div>
  )
}


  