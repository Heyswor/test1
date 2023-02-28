import { CreateTodo } from "./createTodo/createTodo";
import { TodoList } from "./TodoList/TodoList";

export const App = () => {
  return <div>
    <CreateTodo/>
    <TodoList/>
  </div>;
};
