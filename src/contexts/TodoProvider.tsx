import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import { axiosInstance } from "../api/axiosClient";

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

   const [todoList, setTodoList] = useState<ITodo[]>([]);
   const [isLoading, setIsLoading] = useState(false);
   const [page, setPage] = useState(1);
   const [limit, setLimit] = useState(10);
   const [title, setTitle] = useState("");

   useEffect(() => {
      /** Mounting */
      const fetchApi = async () => {
         try {
            setIsLoading(true);

            const url = title
               ? `/todos?title=${title}`
               : `/todos?_page=${page}&_limit=${limit}`;

            const response: any = await axiosInstance.get(url);
            setTodoList(response);
            setIsLoading(false);
         } catch (error) {
            console.log("🚀 ~ fetchApi ~ error:", error);
            setIsLoading(false);
         }
      };
      fetchApi();
   }, [page, limit, title]);

   const onPageChange = (newPage: number) => {
      setPage(newPage);
   };

   const onLimitChange = (newLimit: number) => {
      setLimit(newLimit);
   };

   const onGetDataFromChild = (data: string) => {
      setTitle(data);
   };

   const value = {
      todoList,
      isLoading,
      page,
      limit,
      onPageChange,
      onLimitChange,
      onGetDataFromChild,
   };

   return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};

export default TodoProvider;
