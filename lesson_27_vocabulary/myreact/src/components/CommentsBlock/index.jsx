import React from 'react'
import CommentsContainer from '../CommentsContainer'
import AddCommentForm from '../AddCommentForm'

export default function CommentsBlock({ comments, post_id, add_comment, delete_comment }) {
  return (
    <div>
      <CommentsContainer comments={comments} delete_comment={delete_comment} post_id={post_id} />
      <AddCommentForm post_id={post_id} add_comment={add_comment} />
    </div>
  )
}