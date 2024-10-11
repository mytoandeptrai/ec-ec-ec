import React, { useContext, useState } from "react";
import { TodoContext } from "../contexts/TodoProvider";

const TodoForm = () => {
   const todoContext = useContext(TodoContext);
   const { onGetDataFromChild } = todoContext;
   const [inputValue, setInputValue] = useState("");

   const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
      setInputValue(e.target.value);
   };

   const onSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
      e.preventDefault();
      onGetDataFromChild(inputValue);
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
