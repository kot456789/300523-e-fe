import React from 'react'
import PostCard from '../PostCard/PostCard'
import s from './PostCardsContainer.module.css'

export default function PostCardsContainer() {

  const postsData = [
    {
      id: 1,
      title: 'About weather',
      text: "It's very warm today!",
      likes: 10,
      comments_count: 1
    },
    {
      id: 2,
      title: 'About university',
      text: 'My favorite subject is Math',
      likes: 5,
      comments_count: 7
    },
    {
      id: 3,
      title: 'About myself',
      text: 'My name is Anna',
      likes: 3,
      comments_count: 4
    }
  ]

  return (
    <div className={s.posts_container}>
      {
        postsData.map(el => <PostCard key={el.id} {...el} />)
         // {...el} спредоператор (Spread syntax)создаёт для каждого св-ва в объекте одноимённый props. (Пропсы в PostCard.jsx ({ id, title, text, likes, comments_count })  )
        
      }
    </div>
  )
}