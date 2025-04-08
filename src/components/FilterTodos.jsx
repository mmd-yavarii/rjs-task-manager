import { useSearchParams } from 'react-router-dom';
import { useTodo } from '../contexts/TodoProvider';

import styles from '../sass/FilterTodos.module.scss';
import { useEffect, useState } from 'react';

function FilterTodos({ setDisplayTodos, displayTodo }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [todos, dispatchTodos] = useTodo();
  const categories = ['all', ...new Set(todos.map((i) => i.category))];

  const [category, setCategory] = useState('all');

  // set filter with query
  useEffect(() => {
    const newCategory = searchParams.get('category') ?? 'all';

    const result = newCategory != 'all' ? todos.filter((i) => i.category.toLowerCase() == newCategory) : todos;

    setCategory(newCategory);
    setDisplayTodos(result);
  }, [searchParams]);

  // set category as query string
  function categoryHandler(event) {
    const key = 'category';
    const value = event.target.innerText.toLowerCase();
    if (value == 'all') {
      setSearchParams({}, { replace: true });
      return;
    }
    setSearchParams({ [key]: value }, { replace: true });
  }
  if (categories.length > 1) {
    return (
      <div className={styles.filterBtnContainer}>
        <div>
          {categories.map((item, index) => (
            <button key={index} onClick={categoryHandler} className={category == item ? styles.activeFilterBtn : styles.filterBtn}>
              {item}
            </button>
          ))}
        </div>
      </div>
    );
  } else {
    return <></>;
  }
}

export default FilterTodos;
