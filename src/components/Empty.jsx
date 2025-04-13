import { Link } from 'react-router-dom';

function Empty({ title, decription, showAddTodo = false }) {
  return (
    <div className="emptyPage">
      <img src="https://cdn-icons-png.freepik.com/256/11329/11329073.png?semt=ais_hybrid" alt="empty" />
      <p>{title}</p>
      <span>{decription}</span>

      {showAddTodo && (
        <Link style={{ marginTop: '1em', color: '#1673f5' }} to="/addTodo">
          Add New Todo +
        </Link>
      )}
    </div>
  );
}

export default Empty;
