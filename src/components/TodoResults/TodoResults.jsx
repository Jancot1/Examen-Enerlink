import { useSelector } from "react-redux";
import { TodoList, TodoForm } from "../";
import "./styles.css";

export const TodoResults = () => {

  const { value } = useSelector( state => state.todos);

  <TodoList />

  return (
    <div>
      <div className="todo-results"> Done: {value} </div>
      <div align="center">
        <TodoForm />
      </div>
    </div>
  );
};