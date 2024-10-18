import React, { useContext, useState } from "react";
import { TodoContext } from "../contexts/TodoProvider";
import { useDispatch } from "react-redux";
import { SET_TODO_TITLE } from "../store/todo/todo.type";
import { setTitle } from "../store-toolkit/slices/todoSlice";

const TodoForm = () => {
   // const todoContext = useContext(TodoContext);
   // const { onGetDataFromChild } = todoContext;
   const dispatch = useDispatch();
   const [inputValue, setInputValue] = useState("");

   const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
      setInputValue(e.target.value);
   };

   const onSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
      e.preventDefault();
      // onGetDataFromChild(inputValue);
      dispatch(setTitle(inputValue));
   };

   return (
      <form onSubmit={onSubmit}>
         <input
            value={inputValue}
            onChange={onChangeInput}
         />
         <button type="submit">Submit</button>
      </form>
   );
};

export default TodoForm;
