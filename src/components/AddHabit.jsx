import { useEffect, useRef } from 'react';

import styles from '../sass/AddTodoHabit.module.scss';

function AddHabit() {
  const inpElement = useRef();
  const habitTitle = useRef();

  useEffect(() => inpElement.current.focus(), []);

  function addHabitHandler() {
    if (inpElement.current.value) {
      inpElement.current.value = '';
      console.log(habitTitle.current);
    } else {
      alert('Enter a title for the habit');
    }
  }

  return (
    <div className={styles.habitContainer}>
      <input type="text" ref={inpElement} placeholder="Habit title" onChange={(e) => (habitTitle.current = e.target.value)} />
      <button onClick={addHabitHandler}>Add Habit</button>
    </div>
  );
}

export default AddHabit;
