import React from 'react'
import s from './PostCard.module.css'

export default function PostCard({ id, title, text, likes, comments_count }) {  
     // Это props(ы)- { id, title, text, likes, comments_count }

  const card_styles = {
    backgroundColor: likes >= 5 ? 'lightgreen' : 'lightpink',
    border: comments_count >= 4 ? '2px solid red' : '2px solid blue'
  }

//   const coments_styles = {
//     border: comments_count >= 4 ? '2px solid red' : '2px solid blue'
//   }

  return (
    <div style={card_styles} className={s.post_card}>
      <p>ID: { id }</p>
      <p>Title: { title }</p>
      <p>Post: { text }</p>
      <p className={s.likes}>Likes: { likes }</p>
      <p>Comments count: { comments_count }</p>
    </div>
  )
}