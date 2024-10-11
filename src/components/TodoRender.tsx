import { useContext } from "react";
import { TodoContext } from "../contexts/TodoProvider";

const TodoRender = () => {
   const todoContext = useContext(TodoContext);
   const { isLoading, todoList } = todoContext;

   if (isLoading) {
      return <p>Loading....</p>;
   }

   return (
      <ul>
         {todoList.length > 0 &&
            todoList.map((todo) => <li key={todo.id}>{todo.title}</li>)}
      </ul>
   );
};

export default TodoRender;
