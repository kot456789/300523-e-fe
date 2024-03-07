import { usersData } from "../../data/usersData";

const defaultState = usersData;  //defaultState-изначальное состояние. usersData-наш массив(src/data/usersData) 

const DELETE_USER = 'DELETE_USER';
const DECREMENT_AGE = 'DECREMENT_AGE';
const INCREMENT_AGE = 'INCREMENT_AGE';

export const deleteUserAction = (id) => ({ type: DELETE_USER, payload: id });
export const decrementAgeAction = (id) => ({ type: DECREMENT_AGE, payload: id });
export const incrementAgeAction = (id) => ({ type: INCREMENT_AGE, payload: id });

export const usersReducer = (state = defaultState, action) => {  //Reducer-это функция(принимает 2 значения аргументов: 1знач-е. state =     defaultState( это = usersData), 2знач-е. action)
  if(action.type === DELETE_USER){                   //action(действие)~удаление,добавление карточек,DELETE_USER -удаляем карточку
    return state.filter(el => el.id !== action.payload)
  } else if(action.type === DECREMENT_AGE) {
    const target_user = state.find(el => el.id === action.payload);
    target_user.age--;  // уменьшаем age при клике на на кнопку с минусом
    return [...state]
  } else if(action.type === INCREMENT_AGE){
    const target_user = state.find(el => el.id === action.payload);
    target_user.age++;    //увеличиваем age при клике на на кнопку с плюсом 
    return [...state]
  }
  return state // всегда возвращает изначальное состояние(даже если action непроизойдёт)
}
