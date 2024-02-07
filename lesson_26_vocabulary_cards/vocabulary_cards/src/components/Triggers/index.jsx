import React from 'react'
import s from './index.module.css'

export default function Triggers({ change_to_rus, change_to_eng, delete_all }) {   // принимаем функции в Triggers : change_to_rus, change_to_eng, delete_all
  return (
    <div className={s.triggers}>
      <div onClick={change_to_rus}>RUS</div>
      <div onClick={change_to_eng}>ENG</div>
      <div onClick={delete_all}>Delete</div>
    </div>
  )
}