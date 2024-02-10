import React from 'react'
import CommentsContainer from '../CommentsContainer'
import AddCommentForm from '../AddCommentForm'

export default function CommentsBlock({ comments, post_id, add_comment }) {
  return (
    <div>
      <CommentsContainer comments={comments} />
      <AddCommentForm post_id={post_id} add_comment={add_comment} />
    </div>
  )
}