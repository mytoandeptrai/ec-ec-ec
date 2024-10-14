import { ITodo } from "../../contexts/TodoProvider";
import {
   SET_TODO,
   SET_TODO_LIMIT,
   SET_TODO_LOADING,
   SET_TODO_PAGE,
   SET_TODO_TITLE,
} from "./todo.type";

export const setTodo = (payload: ITodo[]) => {
   return {
      type: SET_TODO,
      payload,
   };
};

export const setTodoLoading = (payload: boolean) => ({
   type: SET_TODO_LOADING,
   payload,
});

export const setTodoPage = (payload: number) => ({
   type: SET_TODO_PAGE,
   payload,
});

export const setTodoLimit = (payload: number) => ({
   type: SET_TODO_LIMIT,
   payload,
});

export const setTodoTitle = (payload: string) => ({
   type: SET_TODO_TITLE,
   payload,
});
