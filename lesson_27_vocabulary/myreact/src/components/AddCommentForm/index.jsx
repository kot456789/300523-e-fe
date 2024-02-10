import React from 'react'
import s from './index.module.css'

export default function AddCommentForm({ post_id, add_comment }) {

  const submit = e => {
    e.preventDefault();

    const { comment } = e.target;

    const new_comment = {
      id: Date.now(),
      text: comment.value
    }

    add_comment(new_comment, post_id)

    // console.log(new_comment);

    e.target.reset()
  }

  return (
    <form onSubmit={submit} className={s.comment_form}>
      <input type='text' placeholder='Enter your comment' name='comment' />
      <button>Add comment</button>
    </form>
  )
}