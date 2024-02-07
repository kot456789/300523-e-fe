import './App.css';
import { useState } from 'react';
import { words_data } from './data/words_data';
import AddCardForm from './components/AddCardForm';
import CardsContainer from './components/CardsContainer';
import Triggers from './components/Triggers';

function App() {

  let [ cards, setCards ] = useState(words_data);  // cards -это состояние, setCards -изменение состояния

  const change_to_rus = () => {
    // у каждого объекта изменить значение свойства lang на ru
    setCards(cards.map(el => {
      el.lang = 'ru'
      return el
    }))
  }

  const change_to_eng = () => {
    // у каждого объекта изменить значение свойства lang на en
    setCards(cards.map(el => {
      el.lang = 'en'
      return el
    }))
  }
       // delete_all - функция.закидываем в Triggers
  const delete_all = () => setCards(cards = []); // присваеваем cards состояние пустого массива []

  const add_new_word = (new_word) => setCards([...cards, new_word]);

  const delete_card = (id) => setCards(cards.filter(el => el.id !== id));

  // .find()
  // Найти в cards элемент по id
  // У найденного элемента изменить значение в свойстве lang на противоположное
  // Передать в setCards обновленный массив
  // setCards([...cards])

  // const change_lang = (id) => {
  //   const target_card = cards.find(el => el.id === id);
  //   target_card.lang = target_card.lang === 'ru' ? 'en' : 'ru';
  //   setCards([...cards])
  // }


  // map()
  // Пройти по cards методом map(), проверить айди каждого элемента массива на соответствие переданному в функцию id. И если айдишники совпали изменить значение свойства lang на противоположное + вернуть измененный элемент
  // setCards(cards.map())


  const change_lang = (id) => {
    setCards(cards.map(el => {
      if(el.id === id){
        el.lang = el.lang === 'ru' ? 'en' : 'ru'
      }
      return el
    }))
  }

  return (                 // <AddCardForm add_new_word={add_new_word} />  - создаём одноимённый props в div
    <div>                                        
      <AddCardForm add_new_word={add_new_word} /> 
      <CardsContainer cards={cards} delete_card={delete_card} change_lang={change_lang} />
      <Triggers change_to_rus={change_to_rus} change_to_eng={change_to_eng} delete_all={delete_all} />
    </div>                                                               // | delete_all - функция.закидываем в Triggers и создаём одноимённый props
  );
}

export default App;