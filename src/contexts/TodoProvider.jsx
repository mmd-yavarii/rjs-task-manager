import { createContext, useContext, useEffect, useReducer, useState } from 'react';

const TodoContext = createContext();

const initialState = 'todos' in localStorage ? JSON.parse(localStorage.getItem('todos')) : [];

function reducer(state, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, action.payload];

    case 'REMOVE_TODO':
      return state.filter((i) => i.id != action.payload.id);

    case 'CHANGE_STATUS':
      return state.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, isDone: !item.isDone };
          s;
        }
        return item;
      });

    default:
      throw new Error('Action is not valied');
  }
}

function TodoProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(state));
  }, [state]);

  return <TodoContext.Provider value={{ state, dispatch }}>{children}</TodoContext.Provider>;
}

// custom hook for get context data
function useTodo() {
  const { state, dispatch } = useContext(TodoContext);
  return [state, dispatch];
}

export default TodoProvider;
export { useTodo };
