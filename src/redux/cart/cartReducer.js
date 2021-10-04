import { ADD_TO_CART, REMOVE_CART } from "./cartActionTypes";

const initialState = {
  cartItems: [],
  isLoading: false,
};
const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const index = state.cartItems.find(
        (cartItem) => cartItem.id === action.payload.items.id
      );
      return {
        ...state,
        cartItems: index
          ? state.cartItems.map((item) => {
              return item.id === action.payload.items.id
                ? {
                    ...item,
                    quantity:
                      Number(item.quantity) + Number(action.payload.quantity),
                    price: Number(item.price) * Number(item.quantity),
                  }
                : item;
            })
          : [
              ...state.cartItems,
              {
                ...action.payload.items,
                quantity: action.payload.quantity,
                price:
                  Number(action.payload.items.price) *
                  Number(action.payload.quantity),
              },
            ],
        isLoading: false,
      };
    case REMOVE_CART:
      console.log(state.cartItems, action.payload);
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== action.payload),
      };
    default:
      return state;
  }
};
export default cartReducer;
