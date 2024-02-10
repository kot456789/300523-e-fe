import React from 'react'
import s from './index.module.css'

export default function SessionCard({ title, img }) {

  const styles = {
    backgroundImage: `url('${img}')`
  }

  return (
    <div style={styles} className={s.session_card}>
      { title }
    </div>
  )
}