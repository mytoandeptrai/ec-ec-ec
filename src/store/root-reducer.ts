import { combineReducers } from "redux";
import { counterReducer } from "./counter/counter.reducer";
import { todoReducer } from "./todo/todo.reducer";

/** Cách đặt tên: tên reducer + state : reducer của mình */
export const rootReducer = combineReducers({
   counterState: counterReducer,
   todoState: todoReducer,
});
