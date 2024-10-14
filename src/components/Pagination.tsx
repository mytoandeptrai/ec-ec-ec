import React, { useContext } from "react";
import { TodoContext } from "../contexts/TodoProvider";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { SET_TODO_LIMIT, SET_TODO_PAGE } from "../store/todo/todo.type";

const Pagination = () => {
   // const todoContext = useContext(TodoContext);
   // const { page, onPageChange, onLimitChange, limit } = todoContext;
   const page = useSelector((state: RootState) => {
      return state.todoState.page;
   });
   const limit = useSelector((state: RootState) => {
      return state.todoState.limit;
   });

   const dispatch = useDispatch();

   const onNext = () => {
      const newPage = page + 1;
      // onPageChange(newPage);

      const object = {
         type: SET_TODO_PAGE,
         payload: newPage,
      };
      dispatch(object);
   };

   const onPrev = () => {
      const newPage = page - 1;
      if (newPage <= 0) return;
      // onPageChange(newPage);

      const object = {
         type: SET_TODO_PAGE,
         payload: newPage,
      };
      dispatch(object);
   };

   const onSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
      const value = event.target.value;
      // onLimitChange(Number(value));

      const object = {
         type: SET_TODO_LIMIT,
         payload: Number(value),
      };

      dispatch(object);
   };

   return (
      <div>
         <select
            value={limit}
            onChange={onSelectChange}
         >
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="50">50</option>
            <option value="100">100</option>
         </select>

         <button
            style={{ marginLeft: "10px" }}
            onClick={onPrev}
         >
            Prev
         </button>
         <button
            onClick={onNext}
            style={{ marginLeft: "10px" }}
         >
            Next
         </button>
      </div>
   );
};

export default Pagination;
