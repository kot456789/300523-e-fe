import React from 'react'
import s from './index.module.css'

export default function NewsCard({ title, news_img, date }) {

  const background = {
    backgroundImage: `url(${news_img})`
  }

  return (
    <div style={background} className={s.news_card}>
      <p>{ date }</p>
      <p>{ title }</p>
    </div>
  )
}