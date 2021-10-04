import { ADD_TO_CART, REMOVE_CART } from "./cartActionTypes";

export function addToCart(items, quantity = 1) {
  return {
    type: ADD_TO_CART,
    payload: { items, quantity },
  };
}
export function removeFromCart(id) {
  return {
    type: REMOVE_CART,
    payload: id,
  };
}
