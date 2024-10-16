import { combineReducers } from "redux";
import { counterReducer } from "./counter/counter.reducer";
import { todoReducer } from "./todo/todo.reducer";
import { nameReducer } from "./name/name.reducer";
import { cartReducer } from "./cart/cart.reducer";
/** Cách đặt tên: tên reducer + state : reducer của mình */
export const rootReducer = combineReducers({
   counterState: counterReducer,
   todoState: todoReducer,
   nameState: nameReducer,
   cartState: cartReducer,
});
