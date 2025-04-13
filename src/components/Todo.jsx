import { useState } from 'react';

import { useTodo } from '../contexts/TodoProvider';
import styles from '../sass/Todo.module.scss';

import { TiTick } from 'react-icons/ti';
import { FiTrash2 } from 'react-icons/fi';
import { TbEdit } from 'react-icons/tb';
import { useSearchParams } from 'react-router-dom';

function Todo({ info }) {
  const [todos, dispatchTodos, displayTodo, setDisplayTodos] = useTodo();
  const [isTodoDone, setIsTodoDone] = useState(info.isDone);
  const [todoTitle, setTodoTitle] = useState(info.title);

  const [searchParaams, setSearchParams] = useSearchParams();

  // change todo status handler
  function changeStatusHandler() {
    dispatchTodos({ type: 'CHANGE_STATUS', payload: info });
    setIsTodoDone((prev) => !prev);
  }

  // delete todo handler
  function deleteTodoHandler(event) {
    const confirmation = confirm('Are you sure ?');
    if (confirmation) {
      dispatchTodos({ type: 'REMOVE_TODO', payload: info });
      setSearchParams({});
      const todoItem = event.target.closest('[data-delete-btn]');
      todoItem.parentElement.parentElement.style.display = 'none';
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
      </div>

      <div className={styles.btnsHandler}>
        <button onClick={editHandler} data-edit-btn={true}>
          <TbEdit />
        </button>

        <button onClick={deleteTodoHandler} data-delete-btn={true}>
          <FiTrash2 />
        </button>
      </div>
    </div>
  );
}

export default Todo;
