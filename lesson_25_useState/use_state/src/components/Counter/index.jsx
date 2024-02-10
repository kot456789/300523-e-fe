import React from 'react'
import s from './index.module.css'
import { useState } from 'react';

export default function Counter() {

  let [ count, setCount ] = useState(0);

  // count - состояние
  // setCount - функция, отслеживающая изменение состояния

  // let count = 0;

  const incr = () => {
    setCount(++count)
    console.log(count)
  }

  const decr = () => {
    setCount(--count)
    console.log(count)
  }

  return (
    <div className={s.counter}>

      <p>{ count }</p>

      <div>
        <button onClick={decr}>-</button>
        <button onClick={incr}>+</button>
      </div>
    </div>
  )
}