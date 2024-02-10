// !набираем rfc - и создаём шаблон. Название User ,шаблон взял из User.jsx (components), (название пишем с больш. буквы)


import React from 'react'

export default function User({ firstname, lastname, age }) {   // с export default -экспортируем User во внешний мир.  Надо ещё импартировать в App.jsx -(import User from './components/User';)
  return (
    <div>
      <p>Firstname: { firstname }</p>
      <p>Lastname: { lastname }</p>
      <p>Age: { age }</p>
    </div>
  )
}