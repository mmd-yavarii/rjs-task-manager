import { useTodo } from '../contexts/TodoProvider';

import Empty from '../components/Empty';
import Todo from '../components/Todo';
import FilterTodos from '../components/FilterTodos';

function TodoListPage() {
  const [, , displayTodo, setDisplayTodos] = useTodo();

  const a = displayTodo.filter((i) => i.importance == 'a');
  const b = displayTodo.filter((i) => i.importance == 'b');
  const c = displayTodo.filter((i) => i.importance == 'c');

  return (
    <div className="page">
      <FilterTodos setDisplayTodos={setDisplayTodos} displayTodo={displayTodo} />

      <div style={{ marginTop: '3em' }}>
        {displayTodo.length ? (
          <>
            {!!a.length && <p className="titles">highPriority</p>}
            {a.map((i) => (
              <Todo key={i.id} info={i} />
            ))}

            {!!b.length && <p className="titles">mediumPriority</p>}
            {b.map((i) => (
              <Todo key={i.id} info={i} />
            ))}

            {!!c.length && <p className="titles">lowPriority</p>}
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
