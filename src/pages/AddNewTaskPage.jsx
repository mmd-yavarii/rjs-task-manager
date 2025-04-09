import { useEffect } from 'react';
import { NavLink, Outlet, useLocation, useNavigate } from 'react-router-dom';

import styles from '../sass/AddPage.module.scss';

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
      {/* <div className={styles.linkContainer}>
        <NavLink to="/add/todo" replace={true}>
          add todo
        </NavLink>

        <NavLink to="/add/habit" replace={true}>
          add habit
        </NavLink>
      </div> */}

      <Outlet />
    </div>
  );
}

export default AddNewTaskPage;
