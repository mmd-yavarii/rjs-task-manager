import { useTodo } from '../contexts/TodoProvider';
import styles from '../sass/Todo.module.scss';

import { TiTick } from 'react-icons/ti';
import { FiTrash2 } from 'react-icons/fi';
import { useState } from 'react';

function Todo({ info }) {
  const [todos, dispatchTodos] = useTodo();
  const [isTodoDone, setIsTodoDone] = useState(info.isDone);

  // change todo status handler
  function changeStatusHandler() {
    dispatchTodos({ type: 'CHANGE_STATUS', payload: info });
    setIsTodoDone((prev) => !prev);
  }

  // delete todo handler
  function deleteTodoHandler() {
    const confirmation = confirm('Are you sure ?');
    if (confirmation) {
      dispatchTodos({ type: 'REMOVE_TODO', payload: info });
    }
  }

  return (
    <div className={styles.container}>
      <div>
        <div onClick={changeStatusHandler} className={isTodoDone ? styles.done : styles.status}>
          {isTodoDone && <TiTick />}
        </div>
        <p className={isTodoDone ? styles.doneTitle : null}>{info.title}</p>
      </div>

      <button onClick={deleteTodoHandler}>
        <FiTrash2 fontSize="1.2rem" opacity="0.6" />
      </button>
    </div>
  );
}

export default Todo;
