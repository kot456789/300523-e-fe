import { createStore, combineReducers, applyMiddleware } from 'redux';
import { categoriesReducer } from './reducers/categoriesReducer';
import { thunk } from 'redux-thunk'
import { productsByCategoryReducer } from './reducers/productsByCategoryReducer';
import { singleProductReducer } from './reducers/singleProductReducer';
import { cartReducer } from './reducers/cartReducer'

const rootReducer = combineReducers({
  categories: categoriesReducer,
  productsByCategory: productsByCategoryReducer,
  singleProduct: singleProductReducer,
  cart: cartReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunk));