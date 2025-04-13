import { useTodo } from '../contexts/TodoProvider';

import Empty from '../components/Empty';
import Todo from '../components/Todo';
import FilterTodos from '../components/FilterTodos';

function TodoListPage() {
  const [todos, , displayTodo, setDisplayTodos] = useTodo();

  const a = displayTodo.filter((i) => i.importance == 'a');
  const b = displayTodo.filter((i) => i.importance == 'b');
  const c = displayTodo.filter((i) => i.importance == 'c');
  const today = displayTodo.filter((i) => i.importance == 'today');

  return (
    <div className="page">
      <FilterTodos setDisplayTodos={setDisplayTodos} displayTodo={displayTodo} />

      <div style={{ marginTop: '3em' }}>
        {todos.length ? (
          <>
            {!!today.length && <p className="titles">only for today</p>}
            {today.map((i) => (
              <Todo key={i.id} info={i} />
            ))}

            {!!a.length && <p className="titles">high Priority</p>}
            {a.map((i) => (
              <Todo key={i.id} info={i} />
            ))}

            {!!b.length && <p className="titles">medium Priority</p>}
            {b.map((i) => (
              <Todo key={i.id} info={i} />
            ))}

            {!!c.length && <p className="titles">low Priority</p>}
            {c.map((i) => (
              <Todo key={i.id} info={i} />
            ))}
          </>
        ) : (
          <Empty title="There is no todo" decription="It looks like you haven't added any todos yet." showAddTodo={true} />
        )}
      </div>
    </div>
  );
}

export default TodoListPage;
