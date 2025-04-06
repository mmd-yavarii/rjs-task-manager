import { useEffect, useState } from 'react';
import { useTodo } from '../contexts/TodoProvider';

import Empty from '../components/Empty';
import Todo from '../components/Todo';
import FilterTodos from '../components/FilterTodos';

function TodoListPage() {
  const [todos, dispatchTodos] = useTodo();
  const [displayTodo, setDisplayTodos] = useState(todos);

  useEffect(() => setDisplayTodos(todos), [todos]);

  return (
    <div className="page">
      <FilterTodos setDisplayTodos={setDisplayTodos} />

      <p className="session-title">Todos</p>

      {displayTodo.length ? (
        displayTodo.map((i) => <Todo key={i.id} info={i} />)
      ) : (
        <Empty title="There is no todo" decription="It looks like you haven't added any todos yet." />
      )}
    </div>
  );
}

export default TodoListPage;
