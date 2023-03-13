import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todo: [],
  value: 0
}

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    setTodos: (state, { payload }) => {
      state.todo = [...payload];
    },
    onAddNewTodo: (state, { payload }) => {
      state.todo.push(payload);
    },
    onUpdateTodo: (state, { payload }) => {
      state.todo = state.todo.map( td => {
        if (td.id === payload.id) {
          return {
            ...payload
          };
        }
        return td;
      });
    },
    onDeleteTodo: ( state, { payload } ) => {
      state.todo = state.todo.filter( todo => todo.id !== payload);
    }, 
    todoCounter: (state) => {
      state.value = state.todo.filter( todo => todo.checked == true).length
    }
  },
})

// Action creators are generated for each case reducer function
export const { 
  onAddNewTodo, onSetActiveTodo, setTodos, onUpdateTodo,
  onDeleteTodo, todoCounter,
} = todoSlice.actions
