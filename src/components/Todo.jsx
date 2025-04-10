import { useState } from 'react';

import { useTodo } from '../contexts/TodoProvider';
import styles from '../sass/Todo.module.scss';

import { TiTick } from 'react-icons/ti';
import { FiTrash2 } from 'react-icons/fi';
import { TbEdit } from 'react-icons/tb';
import { GoDotFill } from 'react-icons/go';

function Todo({ info }) {
  const [todos, dispatchTodos] = useTodo();
  const [isTodoDone, setIsTodoDone] = useState(info.isDone);
  const [todoTitle, setTodoTitle] = useState(info.title);

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

  // edit a todo handler
  function editHandler(event) {
    const todoItem = event.target.closest('[data-edit-btn]');
    const todoTitle = todoItem.parentElement.previousElementSibling.lastChild.innerText;
    const newTitle = prompt('todo title', todoTitle);
    if (newTitle) {
      dispatchTodos({ type: 'EDIT', payload: { id: info.id, newTitle: newTitle } });
      setTodoTitle(newTitle);
    }
  }

  return (
    <div className={styles.container}>
      <div>
        <div onClick={changeStatusHandler} className={isTodoDone ? styles.done : styles.status}>
          {isTodoDone && <TiTick />}
        </div>
        <p data-todo-title={true} className={isTodoDone ? styles.doneTitle : null}>
          {todoTitle}
        </p>

        {/* <GoDotFill
          fontSize="0.5rem"
          opacity="0.7"
          color={(info.importance == 'a' && 'red') || (info.importance == 'b' && '#ff7b00') || (info.importance == 'c' && '#ffb300')}
        /> */}
      </div>

      <div className={styles.btnsHandler}>
        <button onClick={editHandler} data-edit-btn={true}>
          <TbEdit />
        </button>

        <button onClick={deleteTodoHandler}>
          <FiTrash2 />
        </button>
      </div>
    </div>
  );
}

export default Todo;
