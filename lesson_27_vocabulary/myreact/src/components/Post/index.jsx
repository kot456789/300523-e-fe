import React from 'react'
import s from './index.module.css'
import CommentsBlock from '../CommentsBlock';

export default function Post({ id, title, description, like, comments, change_like, delete_post, add_comment }) {

  const like_text = like ? 'Liked' : 'Like?';

  const like_styles = {
    color: like ? 'white' : 'black',
    backgroundColor: like ? 'darkblue' : 'white'
  }

  return (
    <div className={s.post}>
      <div 
        style={like_styles}
        onClick={() => change_like(id)}
      >
        { like_text }
      </div>
      <p>{ title }</p>
      <p>{ description }</p>
      <span onClick={() => delete_post(id)}>X</span>
      <CommentsBlock comments={comments} post_id={id} add_comment={add_comment} />
    </div>
  )
}