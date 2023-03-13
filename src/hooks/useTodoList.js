import { useDispatch } from "react-redux";
import toast from 'react-hot-toast';
import { deleteTodo, updateTodo } from "../store";

export const useTodoList = () => {

  const dispatch = useDispatch();

  const message = () => {
    toast.error('Error al realizar petición a la Api.');
  }

  const handleDelete = (todoId) => {
    dispatch(deleteTodo(todoId)).catch((error) => {
      if (error.response) {
        message();
      }
    });
  };

  const toggleCheck = (todoId, isChecked) => {
    dispatch(updateTodo(todoId, isChecked)).catch((error) => {
      if (error.response) {
        message();
      }
    });
  };

  return {
    handleDelete,
    toggleCheck,
  }
}
