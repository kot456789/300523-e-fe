import React from 'react'
import s from './index.module.css'

export default function Card({ id, lang, rus, eng, delete_card, change_lang }) {

  const text = lang === 'en' ? eng : rus;

  const card_styles = {
    backgroundColor: lang === 'en' ? 'rgb(41, 128, 185)' : 'white',
    color: lang === 'en' ? 'white' : 'rgb(41, 128, 185)'
  }

  // !БЕЗ ф. event.stopPropagation() нажимая на X (с.26) карточки не удалялись бы
  // удаляем card нажимая на X (строка 26) // нажимая на  onClick(строка 26). функцией deleteWord, вызываем ф.  delete_card(id),принимает  event и делает  event.stopPropagation().С его помощью onClick делается на span а не на div.
  const deleteWord = (event) => {
      delete_card(id);
      event.stopPropagation()
  }

  return (
    <div 
      className={s.card} 
      style={card_styles}
      onClick={() => change_lang(id)}
    >
      <span onClick={(deleteWord)}>X</span>
      {/* <RxCross2 className={s.close_icon} onClick={() => delete_card(id)} /> */}
      <p>{ text }</p>
    </div>
  )
}