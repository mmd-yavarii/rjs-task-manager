import { useEffect, useRef } from 'react';
import styles from '../sass/todoOrHabitPart.module.scss';

import { v4 as uuidv4 } from 'uuid';
import { useTodo } from '../contexts/TodoProvider';

function AddTodo() {
  const [state, dispatch] = useTodo();

  const titleEle = useRef();
  const categoryEle = useRef();

  const title = useRef('');
  const category = useRef('');

  useEffect(() => {
    titleEle.current.focus();
  }, []);

  // add new todo handler
  function addTodoHandler() {
    if (title.current) {
      const todo = { title: title.current.trim(), isDone: false, id: uuidv4(), category: category.current.trim() };

      dispatch({ type: 'ADD_TODO', payload: todo });
      titleEle.current.value = '';
      categoryEle.current.value = '';
    } else {
      alert('Enter title');
    }
  }

  return (
    <div className={styles.todocontainer}>
      <input ref={titleEle} type="text" placeholder="Todo title" onChange={(e) => (title.current = e.target.value)} required={true} />
      <input ref={categoryEle} type="text" placeholder="Category" onChange={(e) => (category.current = e.target.value)} />

      <button onClick={addTodoHandler}>Add Todo</button>
    </div>
  );
}

export default AddTodo;
