const defaultState = JSON.parse(localStorage.getItem('cart')) || [];

const ADD_TO_CART = "ADD_TO_CART";
const DELETE_CART_ITEM = "DELETE_CART_ITEM";
const INCR_COUNT = "INCR_COUNT";
const DECR_COUNT = "DECR_COUNT";
const CLEAR_CART = 'CLEAR_CART';
// (product) - объект продукта со всеми данными прод-та,к которому лобавляем count
export const addToCartAction = (product) => ({
  type: ADD_TO_CART,
  payload: product,
});
export const deleteCartItemAction = (id) => ({
  type: DELETE_CART_ITEM,
  payload: id,
});
export const incrCountAction = (id) => ({ type: INCR_COUNT, payload: id });
export const decrCountAction = (id) => ({ type: DECR_COUNT, payload: id });
export const clearCartAction = () => ({ type: CLEAR_CART });

// проверяем есть ли продукт в корзине. state-где проверяем(состояние корзины). payload-сам продукт
const checkProduct = (state, payload) => {
  const productInState = state.find((el) => el.id === payload.id);
  // либо {} - если товар найден (true)
  // либо undefined -  если товар не найден (false)

  if (productInState) {
    productInState.count++; //если продукт найден ,увеличиваем count на 1
    return [...state]; // возвращаем обновлённое состояние
  } else {
    return [...state, { ...payload, count: 1 }]; // если продукт ненашёлся,возвращаем текущщее состояние с добавленным объектом ...payload и добавить count: 1
  }
};

export const cartReducer = (state = defaultState, action) => {
  if (action.type === ADD_TO_CART) {           // произошёл action добавления продукта в корзину
    return checkProduct(state, action.payload);
  } else if (action.type === DELETE_CART_ITEM) {        
    return state.filter((el) => el.id !== action.payload);   // удаляем карточку,сравниваем id с action.payload (в payload находится id товара)(filter возвращает обновлённый массив) //! удаление мы передаём в CartItem ( <p onClick={() => dispatch(deleteCartItemAction(id))}>X</p>)
  } else if (action.type === INCR_COUNT) {
    // 1. Найти карточку, у которой увеличиваем count
    const targetCard = state.find((el) => el.id === action.payload);

    // 2. У найденной карточки {} обращаемся к count и увеличиваем на единицу . //!  onClick вешаем в CartItem на (  <button onClick={() => dispatch(incrCountAction(id))}>+</button>  ) 
    targetCard.count++;

    // 3. Возвращаем обновленное состояние
    return [...state];
  } else if (action.type === DECR_COUNT) {
    // 1. Найти карточку, у которой увеличиваем count
    const targetCard = state.find((el) => el.id === action.payload);

    // 2. У найденной карточки проверяем свойство count. Если count === 1, то карточка удаляется. В ином случае count уменьшается на единицу  //!  onClick вешаем в CartItem на (  <button onClick={() => dispatch(decrCountAction(id))}>-</button>  )

    if (targetCard.count === 1) { 
      state = state.filter((el) => el.id !== action.payload); // если targetCard.count === 1,то выводим новый массив
    } else {
      targetCard.count--;                                     // В ином случае count уменьшается на единицу
    }

    // 3. Возвращаем обновленное состояние
    return [...state];

  } else if (action.type === CLEAR_CART){
    return []
  }

  return state;
};
