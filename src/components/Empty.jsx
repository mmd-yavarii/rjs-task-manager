function Empty({ title, decription }) {
  return (
    <div className="emptyPage">
      <img src="https://cdn-icons-png.freepik.com/256/11329/11329073.png?semt=ais_hybrid" alt="empty" />
      <p>{title}</p>
      <span>{decription}</span>
    </div>
  );
}

export default Empty;
