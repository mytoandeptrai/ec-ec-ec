import { useContext } from "react";
import { ITodo, TodoContext } from "../contexts/TodoProvider";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

const TodoRender = () => {
   // const todoContext = useContext(TodoContext);
   // const { isLoading, todoList } = todoContext;

   const todoList: ITodo[] = useSelector((state: RootState) => {
      return state.todoState.todoList;
   });

   const isLoading = useSelector((state: RootState) => {
      return state.todoState.loading;
   });

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
