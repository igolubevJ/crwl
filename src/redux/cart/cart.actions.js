import { TOOGLE_CART_HIDDEN, ADD_ITEM } from './cart.types';

export const toogleCartHidden = () => ({
  type: TOOGLE_CART_HIDDEN
});

export const addItemToCart = item => ({
  type: ADD_ITEM,
  payload: item
});
