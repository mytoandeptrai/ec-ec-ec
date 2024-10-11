import Pagination from "./Pagination";
import TodoAction from "./TodoAction";
import TodoForm from "./TodoForm";
import TodoRender from "./TodoRender";

const TodoList = () => {
   return (
      <div>
         <TodoAction />
         <TodoForm />
         <Pagination />
         <TodoRender />
      </div>
   );
};

export default TodoList;
