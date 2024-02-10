import React from 'react'
import news_pic from './media/news_pic.png'
import NewsCard from '../NewsCard'
import s from './index.module.css'

export default function NewsContainer() {

  const newsCards = [
    {
      id: 1,
      title: 'Новый формат сеансов',
      news_img: news_pic,
      // date: '13.02.2022'
    },
    {
      id: 2,
      title: 'Новый формат сеансов',
      news_img: news_pic,
      // date: '13.02.2022'
    },
    {
      id: 3,
      title: 'Новый формат сеансов',
      news_img: news_pic,
      // date: '13.02.2022'
    },
    {
      id: 4,
      title: 'Новый формат сеансов',
      news_img: news_pic,
      // date: '13.02.2022'
    },
    {
      id: 5,
      title: 'Новый формат сеансов',
      news_img: news_pic,
      // date: '13.02.2022'
    },
    {
      id: 6,
      title: 'Новый формат сеансов',
      news_img: news_pic,
      // date: '13.02.2022'
    }
  ]

  return (
    <div className={s.news_container}>
      {
        newsCards.map(el => <NewsCard key={el.id} {...el} />)
      }
    </div>
  )
}