import { useEffect, useRef, useState } from 'react';

import styles from '../sass/AddTodoHabit.module.scss';

import { v4 as uuidv4 } from 'uuid';
import { useTodo } from '../contexts/TodoProvider';

function AddTodo() {
  const [state, dispatchTodos] = useTodo();
  const categories = [...new Set(state.map((i) => i.category))];

  const titleEle = useRef();
  const categoryEle = useRef();

  const title = useRef('');
  const category = useRef('');

  const [importance, setImportance] = useState('today');

  useEffect(() => {
    titleEle.current.focus();
  }, []);

  // add new todo handler
  function addTodoHandler() {
    if (titleEle.current.value.length && categoryEle.current.value.length) {
      const todo = {
        title: titleEle.current.value.trim(),
        isDone: false,
        id: uuidv4(),
        category: categoryEle.current.value.trim(),
        importance: importance,
      };

      dispatchTodos({ type: 'ADD_TODO', payload: todo });
      titleEle.current.value = '';
      categoryEle.current.value = '';
    } else {
      if (!titleEle.current.value) titleEle.current.classList.add(styles.errorInp);
      if (!categoryEle.current.value) categoryEle.current.classList.add(styles.errorInp);
    }
  }

  // set category with button haandler
  function categoryRecomended(event) {
    categoryEle.current.value = event.target.innerText;
  }

  // chaange inuts handler
  function titleChangeHandler(event) {
    title.current = event.target.value;
    event.target.classList.remove(styles.errorInp);
  }
  function categoryChangeHandler(event) {
    category.current = event.target.value;
    event.target.classList.remove(styles.errorInp);
  }

  return (
    <div className={styles.todocontainer}>
      <input ref={titleEle} type="text" placeholder="Todo title" onChange={titleChangeHandler} />
      <input ref={categoryEle} type="text" placeholder="Category" onChange={categoryChangeHandler} />

      <p className={styles.title}>Your Caategories </p>
      <div className={styles.todoRecomender}>
        {categories.map((i, index) => (
          <button key={index} onClick={categoryRecomended}>
            {i}
          </button>
        ))}
      </div>

      <p className={styles.title}>Importance</p>

      <div className={styles.importance}>
        <div>
          <label htmlFor="a">high</label>
          <input type="radio" name="importance" value="a" id="a" checked={importance == 'a'} onChange={(e) => setImportance(e.target.value)} />
        </div>

        <div>
          <label htmlFor="b">medium</label>
          <input type="radio" name="importance" value="b" id="b" checked={importance == 'b'} onChange={(e) => setImportance(e.target.value)} />
        </div>

        <div>
          <label htmlFor="c">low</label>
          <input type="radio" name="importance" value="c" id="c" checked={importance == 'c'} onChange={(e) => setImportance(e.target.value)} />
        </div>

        <div>
          <label htmlFor="today">only for today</label>
          <input
            type="radio"
            name="importance"
            value="today"
            id="today"
            checked={importance == 'today'}
            onChange={(e) => setImportance(e.target.value)}
          />
        </div>
      </div>

      <button onClick={addTodoHandler} className={styles.addBtn}>
        Add Todo
      </button>
    </div>
  );
}

export default AddTodo;
