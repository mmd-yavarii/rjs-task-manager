import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import TodoListPage from './pages/TodoListPage';
import HabitPage from './pages/HabitPage';
import StatisticsPage from './pages/StatisticsPage';

function App() {
  return (
    <Layout>
      <Routes>
        <Route index element={<TodoListPage />} />
        <Route path="/habits" element={<HabitPage />} />
        <Route path="/statistics" element={<StatisticsPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
