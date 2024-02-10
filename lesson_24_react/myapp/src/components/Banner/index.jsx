import React from 'react'
import s from './index.module.css'
import banner_img from './banner_swim.png'

export default function Banner() {

  const banner_styles = {
    backgroundImage: `url('${banner_img}')`
  }

  return (
    <div className={[s.banner, 'wrapper'].join(' ')} style={banner_styles}>
      <p>Укрепление здоровья</p>
      <h1>Акватерапия RitmStyle</h1>
    </div>
  )
}