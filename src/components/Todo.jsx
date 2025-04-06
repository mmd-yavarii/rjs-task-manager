import { useTodo } from '../contexts/TodoProvider';
import styles from '../sass/Todo.module.scss';

import { TiTick } from 'react-icons/ti';
import { FiTrash2 } from 'react-icons/fi';

function Todo({ info }) {
  const [todos, dispatchTodos] = useTodo();

  // change todo status handler
  function changeStatusHandler() {
    dispatchTodos({ type: 'CHANGE_STATUS', payload: info });
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
        <div onClick={changeStatusHandler} className={info.isDone ? styles.done : styles.status}>
          {info.isDone && <TiTick />}
        </div>
        <p className={info.isDone ? styles.doneTitle : null}>{info.title}</p>
      </div>

      <button onClick={deleteTodoHandler}>
        <FiTrash2 />
      </button>
    </div>
  );
}

export default Todo;
