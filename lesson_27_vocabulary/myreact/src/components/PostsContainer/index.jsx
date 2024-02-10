import React from 'react'
import Post from '../Post'
import s from './index.module.css'

export default function PostsContainer({ posts, change_like, delete_post, add_comment }) {
  return (
    <div className={s.posts_container}>
      {
        posts.map(el => <Post key={el.id} {...el} change_like={change_like} delete_post={delete_post} add_comment={add_comment} />)
      }
    </div>
  )
}