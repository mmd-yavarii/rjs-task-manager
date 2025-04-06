import { createContext } from 'react';

const TodoContext = createContext();

const initialState = JSON.parse(localStorage.getItem('todos')) ?? [];

function reducer(state, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, action.payload];
  }
}

function TodoProvider() {
  return <div>TodoProvider</div>;
}

export default TodoProvider;
