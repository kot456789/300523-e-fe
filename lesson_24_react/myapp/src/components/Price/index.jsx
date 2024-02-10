import React from 'react'
import PriceCardsContainer from '../PriceCardsContainer'
import price_img from './price_img.png'
import s from './index.module.css'

export default function Price() {
  return (
    <div className={['wrapper', s.price].join(' ')}>
      <h2>Стоимость сеансов</h2>
      <div>
        <PriceCardsContainer />
        <div>
          <img src={price_img} alt='thanks_card' />
          <p>Подарочный сертификат </p>
        </div>
      </div>
    </div>
  )
}