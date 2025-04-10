import { useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

function AddNewTaskPage() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (pathname == '/add') {
      navigate('/add/todo', { replace: true });
    }
  }, []);

  return (
    <div className="page">
      <Outlet />
    </div>
  );
}

export default AddNewTaskPage;
