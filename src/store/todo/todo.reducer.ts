import { ITodo } from "../../contexts/TodoProvider";
import {
   SET_TODO,
   SET_TODO_LIMIT,
   SET_TODO_LOADING,
   SET_TODO_PAGE,
   SET_TODO_TITLE,
} from "./todo.type";

interface ITodoReducer {
   todoList: ITodo[];
   loading: boolean;
   page: number;
   limit: number;
   title: string;
}

const initialState: ITodoReducer = {
   todoList: [],
   loading: false,
   page: 1,
   limit: 10,
   title: "",
};

export const todoReducer = (state = initialState, action: any) => {
   switch (action.type) {
      case SET_TODO:
         return {
            ...state,
            todoList: action.payload,
         };
      case SET_TODO_LOADING:
         return {
            ...state,
            loading: action.payload,
         };
      case SET_TODO_PAGE:
         return {
            ...state,
            page: action.payload,
         };
      case SET_TODO_LIMIT:
         return {
            ...state,
            limit: action.payload,
         };
      case SET_TODO_TITLE:
         return {
            ...state,
            title: action.payload,
         };
      default:
         return state;
   }
};
