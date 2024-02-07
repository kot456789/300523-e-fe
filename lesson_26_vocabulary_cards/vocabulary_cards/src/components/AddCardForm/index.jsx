import React from 'react'
import s from './index.module.css'

export default function AddCardForm({ add_new_word }) {     // !сдесь принимаем props:  add_new_word

  const form_submit = (event)  => {     // form при submit по умолчанию обновляет страницу
    event.preventDefault(); // запрещаем form обновлять страницу после отправки

    const { rus, eng } = event.target; // обращаемся к imput по нейму rus и eng

    const new_word = {     // создаём новый объект
      id: Date.now(),
      lang: 'ru',
      rus: rus.value,
      eng: eng.value
    }
   
    add_new_word(new_word);  //!вызываем этот props:  add_new_word

    event.target.reset() // очищаем импуты после отправки form
  }

  return (
   <form className={s.add_card_form} onSubmit={form_submit}>
    <input type='text' placeholder='RUS' name='rus' />
    <input type='text' placeholder='ENG' name='eng' />
    <button>Add word</button>
   </form>
  )
}