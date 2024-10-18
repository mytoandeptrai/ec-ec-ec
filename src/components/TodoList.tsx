import { useDispatch, useSelector } from "react-redux";
import Pagination from "./Pagination";
import TodoAction from "./TodoAction";
import TodoForm from "./TodoForm";
import TodoRender from "./TodoRender";
import { RootState } from "../store-toolkit/store";
import { useEffect } from "react";
import { fetchTodoAPI } from "../store-toolkit/slices/todoSlice";

const TodoList = () => {
   const dispatch = useDispatch();
   const todoStates = useSelector((state: RootState) => {
      return state.todoState;
   });

   const { limit, page, title } = todoStates;

   useEffect(() => {
      const object = {
         limit,
         page,
         title,
      };
      dispatch(fetchTodoAPI(object));
   }, [dispatch, limit, page, title]);

   return (
      <div className="todo-list-container">
         <h2>Todo List</h2>
         <div className="action-container">
            <TodoAction />
         </div>
         <TodoForm />
         <div className="pagination-container">
            <Pagination />
         </div>
         <TodoRender />
      </div>
   );
};

export default TodoList;
