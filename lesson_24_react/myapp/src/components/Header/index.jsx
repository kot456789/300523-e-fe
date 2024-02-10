import React from 'react'
import logo from './logo1.png'
import s from './index.module.css'
import { IoMenu } from "react-icons/io5"

export default function Header() {
  return (
    <header className={[s.header, 'wrapper'].join(' ')}>
      <img src={logo} alt='logo' />
      <nav>
        <li>Главная</li>
        <li>Сеансы</li>
        <li>Отзывы</li>
        <li>Контакты</li>
        <li>Новости</li>
        <li>Обо мне</li>
        <li>Блог</li>
      </nav>
      <div>Записаться на сеанс</div>
      <IoMenu className={s.menu_icon} />
    </header>
  )
}