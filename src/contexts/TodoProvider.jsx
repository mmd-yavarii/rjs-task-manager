import { createContext, useContext, useEffect, useReducer, useRef, useState } from 'react';
import { isNewDay } from '../helpers/helper';
import { useLocalStorage } from '../hooks/Hooks';

const TodoContext = createContext();

function reducer(state, action) {
  const today = new Date().toLocaleDateString();

  switch (action.type) {
    case 'ADD_TODO':
      return [...state, action.payload];

    case 'REMOVE_TODO':
      return state.filter((i) => i.id != action.payload.id);

    case 'EDIT':
      return state.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, title: action.payload.newTitle };
        }
        return todo;
      });

    case 'CHANGE_STATUS':
      return state.map((item) => {
        if (item.id === action.payload.id) {
          const lastHabitIndex = item.habit.length - 1;

          const updatedLastHabit = {
            ...item.habit[lastHabitIndex],
            isDone: !item.isDone,
          };

          const updatedHabits = [...item.habit.slice(0, lastHabitIndex), updatedLastHabit];

          return {
            ...item,
            isDone: !item.isDone,
            habit: updatedHabits,
          };
        }
        return item;
      });

    case 'RESET_TODOS_FOR_NEW_DAY':
      const newState = state.filter((i) => i.importance != 'today');

      return newState.map((i) => {
        const habitItem = i.habit.find((item) => item.date == today);

        if (habitItem.date != today) {
          i.habit.push({ date: new Date().toLocaleDateString(), isDone: false });
        }

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

  useEffect(() => setInitialState(state), [state]);

  useEffect(() => {
    if (isNewDay()) {
      dispatch({ type: 'RESET_TODOS_FOR_NEW_DAY' });
    }
  }, []);

  console.log(state);

  return <TodoContext.Provider value={{ state, dispatch }}>{children}</TodoContext.Provider>;
}

// custom hook for get context data
function useTodo() {
  const { state, dispatch } = useContext(TodoContext);
  const [displayTodo, setDisplayTodos] = useState(state);

  return [state, dispatch, displayTodo, setDisplayTodos];
}

export default TodoProvider;
export { useTodo };
