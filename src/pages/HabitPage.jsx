import Empty from '../components/Empty';
import { useTodo } from '../contexts/TodoProvider';

import styles from '../sass/Habit.module.scss';

function HabitPage() {
  const [todos] = useTodo();
  const persistTodos = todos.filter((i) => i.importance != 'today');

  return (
    <div className={`page ${styles.habitPage}`}>
      {persistTodos.length ? (
        persistTodos.map((i) => <HabitCard key={i.id} info={i} />)
      ) : (
        <Empty title="There is no todo" decription="It looks like you haven't added any todos yet." />
      )}
    </div>
  );
}

export default HabitPage;

// todo's habit component
function HabitCard({ info }) {
  const { title, habit, isDone, importance } = info;

  const emptyHabits = [];

  for (let i = 0; i != 60 - habit.length; i++) {
    emptyHabits.push(<div key={i} className={styles.didnt}></div>);
  }

  return (
    <div className={styles.habit}>
      <div className={styles.info}>
        <p>{title}</p>
        <p>{importance}</p>
      </div>

      <div className={styles.habitContainer}>
        {emptyHabits}
        {habit.map((i) => (
          <div key={i.date} className={i.isDone ? styles.done : styles.didnt}></div>
        ))}
      </div>
    </div>
  );
}
