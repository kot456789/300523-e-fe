import { createStore, combineReducers } from 'redux'
import { usersReducer } from './reducers/usersReducer';
import { productsReducer } from './reducers/productsReducer';

const rootReducer = combineReducers({
  users: usersReducer,
  products: productsReducer
});

export const store = createStore(rootReducer); //! соединяем  store   с  index.js  с помощью Provider (src/store/index.js <--> src/index.js  (с помощью Provider)) 