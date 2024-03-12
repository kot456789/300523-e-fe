const defaultState = [];

const ADD_TO_CART = 'ADD_TO_CART';
const DELETE_CART_ITEM = 'DELETE_CART_ITEM';
const INCR_COUNT = 'INCR_COUNT';
const DECR_COUNT = 'DECR_COUNT';

export const addToCartAction = (product) => ({ type: ADD_TO_CART, payload: product });
export const deleteCartItemAction = (id) => ({ type: DELETE_CART_ITEM, payload: id });
export const incrCountAction = (id) => ({ type: INCR_COUNT, payload: id });
export const decrCountAction = (id) => ({ type: DECR_COUNT, payload: id });


const checkProduct = (state, payload) => {
  const productInState = state.find(el => el.id === payload.id);
  // либо {} - если товар найден (true)
  // либо undefined -  если товар не найден (false)

  if(productInState){
    productInState.count++
    return [...state]
  } else {
    return [...state, {...payload, count: 1}]
  }
}

export const cartReducer = (state=defaultState, action) => {
  if(action.type === ADD_TO_CART){
    return checkProduct(state, action.payload)
  } else if (action.type === DELETE_CART_ITEM){
    return state.filter(el => el.id !== action.payload)
  } else if (action.type === INCR_COUNT){
    // 1. Найти карточку, у которой увеличиваем count
    const targetCard = state.find(el => el.id === action.payload);

    // 2. У найденной карточки {} обращаемся к count и увеличиваем на единицу
    targetCard.count++

    // 3. Возвращаем обновленное состояние
    return [...state]
  } else if (action.type === DECR_COUNT){
    // 1. Найти карточку, у которой увеличиваем count
    const targetCard = state.find(el => el.id === action.payload);

    // 2. У найденной карточки проверяем свойство count. Если count === 1, то карточка удаляется. В ином случае count уменьшается на единицу

    if (targetCard.count === 1){
      state = state.filter(el => el.id !== action.payload)
    } else {
      targetCard.count--
    }

    // 3. Возвращаем обновленное состояние
    return [...state]

  }
  return state
}