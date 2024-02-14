import React from 'react'
import s from './index.module.css'
import { Link } from 'react-router-dom'  // ! { Link }  импортируем библиотеки 'react-router-dom'

export default function NavMenu() {
  return (
    <div className={s.nav_menu}>   
      <Link to='/'>Main</Link>           
      <Link to='/configurations'>Configurations</Link>
      <Link to='/teams'>Teams</Link>
    </div>             // >Main< -ссылка на главную страницу. //Атрибут to -делает ,при клике на Main -переходим на главный Rout: to='/' , при клике на Configurations -переходим на Rout:  to='/configurations' , при клике на Teams -переходим на Rout:  to='/teams'  
  )                    // !  у Link  стили как у тега   а
}