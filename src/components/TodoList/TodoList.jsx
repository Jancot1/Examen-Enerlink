import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTodoList } from "../../hooks";
import { getTodos } from "../../store";
import { TodoListItem } from "../";

import "./styles.css";

export const TodoList = () => {

  const { todo } = useSelector( state => state.todos );
  const { handleDelete, toggleCheck } = useTodoList();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTodos());
  
  }, []);

  return (
    <div className="todo-list">
      <span className="todo-list-title">Things to do:</span>
      <div className="todo-list-content">
        {todo.map(t => (
            <TodoListItem
              key={t.id}
              label={t.label}
              id={t.id}
              checked={t.checked}
              onCheck={toggleCheck}
              onDelete={handleDelete}
            />
          ))
        }
      </div>
      {
        todo.length == 0 ? (
          <div className="no-todos">
            Looks like you&apos;re absolutely free today!
          </div>
        ) : null
      }
    </div>
  );
};
