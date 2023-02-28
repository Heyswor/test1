import { useSelector } from "react-redux";
import { getToDos } from "../../redux/selectors";
import { TodoItem } from "../ToDoItem";
import css from "./TodoList.module.css"
export const TodoList = () => {
  const toDos = useSelector(getToDos);
  return (
    <>
      <div className={css.TodoListBar}>
        
        <div className={css.TodoListBar1}>ID</div>
        <div className={css.TodoListBar1}>TITLE</div>
        <div className={css.TodoListBar1}>DESCRIPTION</div>
        <div className={css.TodoListBar1}>STATUS</div>
      </div>

      <ul>
        {toDos.map((item) => (
          <TodoItem key={item.id} item={item} />
        ))}
      </ul>
    </>
  );
};
