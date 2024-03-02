import { usersData } from "../../data/usersData";

const defaultState = usersData;

const DELETE_USER = 'DELETE_USER';
const DECREMENT_AGE = 'DECREMENT_AGE';
const INCREMENT_AGE = 'INCREMENT_AGE';

export const deleteUserAction = (id) => ({ type: DELETE_USER, payload: id });
export const decrementAgeAction = (id) => ({ type: DECREMENT_AGE, payload: id });
export const incrementAgeAction = (id) => ({ type: INCREMENT_AGE, payload: id });

export const usersReducer = (state = defaultState, action) => {
  if(action.type === DELETE_USER){
    return state.filter(el => el.id !== action.payload)
  } else if(action.type === DECREMENT_AGE) {
    const target_user = state.find(el => el.id === action.payload);
    target_user.age--;
    return [...state]
  } else if(action.type === INCREMENT_AGE){
    const target_user = state.find(el => el.id === action.payload);
    target_user.age++;
    return [...state]
  }
  return state
}
