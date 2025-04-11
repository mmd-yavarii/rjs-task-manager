import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import TodoListPage from './pages/TodoListPage';
import HabitPage from './pages/HabitPage';
import StatisticsPage from './pages/StatisticsPage';
import TodoProvider from './contexts/TodoProvider';
import AddNewTaskPage from './pages/AddNewTaskPage';

function App() {
  return (
    <Layout>
      <TodoProvider>
        <Routes>
          <Route index element={<TodoListPage />} />
          <Route path="/habits" element={<HabitPage />} />
          <Route path="/statistics" element={<StatisticsPage />} />
          <Route path="/addTodo" element={<AddNewTaskPage />} />
        </Routes>
      </TodoProvider>
    </Layout>
  );
}

export default App;
