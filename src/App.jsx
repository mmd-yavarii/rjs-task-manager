import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import TodoListPage from './pages/TodoListPage';
import HabitPage from './pages/HabitPage';
import StatisticsPage from './pages/StatisticsPage';
import TodoProvider from './contexts/TodoProvider';
import AddNewTaskPage from './pages/AddNewTaskPage';
import AddTodo from './components/AddTodo';
import AddHabit from './components/AddHabit';

function App() {
  return (
    <Layout>
      <TodoProvider>
        <Routes>
          <Route index element={<TodoListPage />} />
          <Route path="/habits" element={<HabitPage />} />
          <Route path="/statistics" element={<StatisticsPage />} />

          <Route path="/add" element={<AddNewTaskPage />}>
            <Route path="todo" element={<AddTodo />} />
            <Route path="habit" element={<AddHabit />} />
          </Route>
        </Routes>
      </TodoProvider>
    </Layout>
  );
}

export default App;
