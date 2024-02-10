import React from 'react'
import pic1 from './media/pic1.png'
import pic2 from './media/pic2.png'
import s from './index.module.css'

export default function About() {
  return (
    <section className='wrapper'>
      <h2>Об RitmStyle</h2>
      <div className={s.about_container}>
        <div>
          <p>RitmStyle массаж </p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in purus, sed tellus eget mattis nibh quam. Eu ornare nunc, id est. Erat consectetur etiam a sit diam in imperdiet amet. Diam nisl, ipsum suscipit amet. Eleifend amet habitasse proin quis adipiscing.</p>
          <p>Nisl convallis mauris in consequat. Sit ac vitae posuere maecenas dictumst quam. Felis amet diam, non augue massa. Egestas molestie lobortis rhoncus, elit nulla nisl. Habitant tortor at tempor.</p>
        </div>
        <img src={pic1} alt='pic1' />
        <img src={pic2} alt='pic2' />
        <div>
          <p>RitmStyle гидротерапия</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu cras quis ac a non ut viverra turpis eget. Hendrerit quis pulvinar massa ipsum sem. Donec posuere nulla enim non neque etiam. Eros arcu, pulvinar penatibus luctus ridiculus sagittis vel nunc hac. Nisi, diam tincidunt dui viverra. Eget quis ultricies sem nunc risus senectus luctus ultricies. Enim feugiat pharetra pharetra et.</p>
          <p>Pulvinar arcu at morbi posuere cursus. Fermentum est sit enim velit ornare molestie. Ipsum nisi id sed tempor elementum. Mi nunc eget pellentesque ipsum. Suspendisse risus a id vel massa tincidunt. Hendrerit blandit in augue vel mi quam magna egestas. Fringilla ac lacus viverra ullamcorper leo, enim vitae id aliquam. Magna sed tristique tellus enim, netus tempor at elit dui. Ullamcorper hendrerit feugiat libero tellus diam egestas dui tellus odio.</p>
        </div>
      </div>
    </section>
  )
}