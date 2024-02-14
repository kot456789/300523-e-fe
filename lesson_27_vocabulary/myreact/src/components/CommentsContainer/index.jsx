import React from 'react'
import Comment from '../Comment'

export default function CommentsContainer({ comments, delete_comment, post_id }) {
  return (
    <div>
      {
        comments.map(el => <Comment key={el.id} {...el} delete_comment={delete_comment} post_id={post_id} />)
      }
    </div>
  )
}