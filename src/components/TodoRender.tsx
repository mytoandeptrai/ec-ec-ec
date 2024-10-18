import { useSelector } from "react-redux";
import { RootState } from "../store-toolkit/store";

const TodoRender = () => {
   const todoList = useSelector((state: RootState) => state.todoState.todoList);
   const isLoading = useSelector((state: RootState) => state.todoState.loading);

   if (isLoading) {
      return <p className="loading-text">Loading....</p>;
   }

   return (
      <ul className="todo-list">
         {todoList.length > 0 &&
            todoList.map((todo) => <li key={todo.id}>{todo.title}</li>)}
      </ul>
   );
};

export default TodoRender;
