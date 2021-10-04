import { combineReducers } from "redux";
import cartReducer from "./cart/cartReducer";

const rootReducer = combineReducers({
  cartList: cartReducer,
});

export default rootReducer;
