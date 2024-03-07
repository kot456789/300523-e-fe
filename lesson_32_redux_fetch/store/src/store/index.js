import { createStore, combineReducers, applyMiddleware } from 'redux';
import { categoriesReducer } from './reducers/categoriesReducer';
import { thunk } from 'redux-thunk'
import { productsByCategoryReducer } from './reducers/productsByCategoryReducer';

const rootReducer = combineReducers({
  categories: categoriesReducer,
  productsByCategory: productsByCategoryReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunk));