import React from 'react'
import s from './index.module.css'

export default function Comment({ id, text }) {
  return (
    <div className={s.comment}>
      { text }
    </div>
  )
}