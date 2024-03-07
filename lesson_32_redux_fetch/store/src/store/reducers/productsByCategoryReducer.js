const defaultState = [];

const LOAD_PRODUCTS_BY_CATEGORY = 'LOAD_PRODUCTS_BY_CATEGORY';

export const loadProductsByCategoryAction = products => ({ type: LOAD_PRODUCTS_BY_CATEGORY, payload: products });


export const productsByCategoryReducer = (state = defaultState, action) => {
  if(action.type === LOAD_PRODUCTS_BY_CATEGORY){
    return action.payload
  }
  return state
}