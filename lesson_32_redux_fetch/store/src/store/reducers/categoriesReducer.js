const defaultState = [];

const LOAD_CATEGORIES = 'LOAD_CATEGORIES';

export const loadCategoriesAction = categories => ({ type: LOAD_CATEGORIES, payload: categories });

export const categoriesReducer = (state = defaultState, action) => {
  if(action.type === LOAD_CATEGORIES){   // если action.type === LOAD_CATEGORIES, 
    return action.payload                // то по fetch запросу возвращаем categories записанные в action.payload      (payload: categories))
  }
  return state
}