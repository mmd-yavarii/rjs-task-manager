import styles from '../sass/Layout.module.scss';

import { Link, useLocation } from 'react-router-dom';

import { FaTasks } from 'react-icons/fa';
import { LuBrainCircuit } from 'react-icons/lu';
import { IoStatsChart } from 'react-icons/io5';

function Layout({ children }) {
  const { pathname } = useLocation();

  return (
    <div>
      <header className={styles.header}>
        <p>{pathname == '/' ? 'todos' : pathname.replace('/', '').replace('/', ' ')}</p>

        {(pathname == '/' || pathname == '/habits') && (
          <Link to="/add" className={styles.addBtn}>
            Add New +
          </Link>
        )}
      </header>

      {children}

      <footer className={styles.footer}>
        <Link to="/" replace={true} className={pathname == '/' ? styles.activeItem : styles.items}>
          <FaTasks />
          <span>Todos</span>
        </Link>

        <Link to="/habits" replace={true} className={pathname == '/habits' ? styles.activeItem : styles.items}>
          <LuBrainCircuit />
          <span>Habits</span>
        </Link>

        <Link to="/statistics" replace={true} className={pathname == '/statistics' ? styles.activeItem : styles.items}>
          <IoStatsChart />
          <span>Statistics</span>
        </Link>
      </footer>
    </div>
  );
}

export default Layout;
