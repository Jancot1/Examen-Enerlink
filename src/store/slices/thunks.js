import { todosApi } from "../../api/todosApi";
import { onAddNewTodo, onDeleteTodo, onUpdateTodo, setTodos, todoCounter } from "../slices/todoSlice";

export const getTodos = () => {
  return async(dispatch) => {
    const { data } = await todosApi.get('/todos');
    dispatch(setTodos(data));
  }
};

export const saveTodos = (label) => {
  return async(dispatch) => {
    const { data } = await todosApi.post('/todos', {
      label: label,
      checked: false
    });
    dispatch(onAddNewTodo(data));
  }
};

export const updateTodo = (todoId, isChecked) => {
  return async(dispatch) => {
    const { data } = await todosApi.patch(`/todos/${todoId}`, {
      checked: isChecked
    });
    dispatch(onUpdateTodo(data));
    dispatch(todoCounter());
  }
};

export const deleteTodo = (todoId) => {
  return async(dispatch) => {
    const { data } = await todosApi.delete(`/todos/${todoId}`);
    dispatch(onDeleteTodo(todoId));
  }
};