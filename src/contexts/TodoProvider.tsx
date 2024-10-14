import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import { axiosInstance } from "../api/axiosClient";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { setTodo, setTodoLoading } from "../store/todo/todo.action";
import { SET_TODO, SET_TODO_LOADING } from "../store/todo/todo.type";

interface ITodoProvider {
   children: React.ReactNode;
}

export interface ITodo {
   id: number;
   title: string;
   completed: boolean;
   userId: number;
}

export interface ITodoContext {
   todoList: ITodo[];
   isLoading: boolean;
   page: number;
   limit: number;
   onPageChange: (newPage: number) => void;
   onLimitChange: (newLimit: number) => void;
   onGetDataFromChild: (data: string) => void;
}

export const TodoContext = createContext<ITodoContext>({
   todoList: [],
   isLoading: false,
   page: 1,
   limit: 10,
   onPageChange: () => {},
   onLimitChange: () => {},
   onGetDataFromChild: () => {},
});

const TodoProvider = (props: ITodoProvider) => {
   const { children } = props;

   // const [todoList, setTodoList] = useState<ITodo[]>([]);
   // const [isLoading, setIsLoading] = useState(false);
   // const [page, setPage] = useState(1);
   // const [limit, setLimit] = useState(10);
   // const [title, setTitle] = useState("");

   /** Cách 1: Lấy từng field trong reducer */
   // const page = useSelector((state: RootState) => {
   //    return state.todoState.page;
   // });
   // const limit = useSelector((state: RootState) => {
   //    return state.todoState.limit;
   // });
   // const title = useSelector((state: RootState) => {
   //    return state.todoState.title;
   // });

   /** Cách 2: Lấy reducer và sử dụng destructuring */
   const todoState = useSelector((state: RootState) => {
      return state.todoState;
   });

   const { title, limit, page } = todoState;

   const dispatch = useDispatch();

   useEffect(() => {
      /** Mounting */
      const fetchApi = async () => {
         try {
            /** Cách 2 loading */
            const objectLoading = {
               type: SET_TODO_LOADING,
               payload: true,
            };
            dispatch(objectLoading);

            const url = title
               ? `/todos?title=${title}`
               : `/todos?_page=${page}&_limit=${limit}`;

            const response: any = await axiosInstance.get(url);

            /** Cách 1 */
            // dispatch(setTodo(response));

            /** Cách 2 */
            const object = {
               type: SET_TODO,
               payload: response,
            };
            dispatch(object);
            /** ================= */

            /** Cách 1 loading */
            dispatch(setTodoLoading(false));
         } catch (error) {
            dispatch(setTodo([]));
            /** Cách 1 loading */
            dispatch(setTodoLoading(false));
         }
      };

      fetchApi();
   }, [page, limit, title, dispatch]);

   const onPageChange = (newPage: number) => {};

   const onLimitChange = (newLimit: number) => {};

   const onGetDataFromChild = (data: string) => {};

   const value = {
      todoList: [],
      isLoading: false,
      page: 1,
      limit: 10,
      onPageChange,
      onLimitChange,
      onGetDataFromChild,
   };

   return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};

export default TodoProvider;
