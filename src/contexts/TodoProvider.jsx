import { createContext, useContext, useEffect, useReducer, useState } from 'react';
import { isNewDay } from '../helpers/helper';
import { useLocalStorage } from '../hooks/Hooks';

const TodoContext = createContext();

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
        }
        return item;
      });

    case 'RESET_TODOS':
      return state.map((i) => {
        i.isDone = false;
        return i;
      });

    default:
      throw new Error('Action is not valied');
  }
}

function TodoProvider({ children }) {
  const [initialState, setInitialState] = useLocalStorage('todos', []);

  const [state, dispatch] = useReducer(reducer, initialState);
  const NewDay = isNewDay();

  useEffect(() => setInitialState(state), [state]);

  useEffect(() => {
    NewDay && dispatch({ type: 'RESET_TODOS' });
  }, [NewDay]);

  return <TodoContext.Provider value={{ state, dispatch }}>{children}</TodoContext.Provider>;
}

// custom hook for get context data
function useTodo() {
  const { state, dispatch } = useContext(TodoContext);
  return [state, dispatch];
}

export default TodoProvider;
export { useTodo };
