import Empty from '../components/Empty';
import { useTodo } from '../contexts/TodoProvider';

import { ImFileEmpty } from 'react-icons/im';

function TodoListPage() {
  const [todos, dispatchTodos] = useTodo();

  return (
    <div className="page">
      {todos.length ? (
        todos.map((i) => <p key={i.id}>{i.title}</p>)
      ) : (
        <Empty title="There is no todo" decription="It looks like you haven't added any todos yet." />
      )}
    </div>
  );
}

export default TodoListPage;
