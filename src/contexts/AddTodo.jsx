import { useEffect, useRef } from 'react';
import styles from '../sass/todoOrHabitPart.module.scss';

import { v4 as uuidv4 } from 'uuid';
import { useTodo } from './TodoProvider';

function AddTodo() {
  const [state, dispatch] = useTodo();

  const inputEle = useRef();
  const title = useRef();

  useEffect(() => {
    inputEle.current.focus();
  }, []);

  // add new todo handler
  function addTodoHandler() {
    const todo = { title: title.current, isDone: false, id: uuidv4() };
    dispatch({ type: 'ADD_TODO', payload: todo });
    inputEle.current.value = '';
  }

  return (
    <div className={styles.todocontainer}>
      <input ref={inputEle} type="text" placeholder="enter todo title" onChange={(e) => (title.current = e.target.value)} />

      <button onClick={addTodoHandler}>Add Todo</button>
    </div>
  );
}

export default AddTodo;
