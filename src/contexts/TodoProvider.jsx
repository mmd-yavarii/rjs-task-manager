import { createContext, useContext, useEffect, useReducer } from 'react';

const TodoContext = createContext();

const initialState = JSON.parse(localStorage.getItem('todos')) ?? [];

function reducer(state, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, action.payload];

    case 'REMOVE_TODO':
      return state.filter((i) => i.id != action.payload.id);

    case 'CHANGE_STATUS':
      const todo = state.find((i) => i.id == action.payload.id);
      todo.isDone = !todo.isDone;
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
