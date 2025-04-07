// function for check day changed
function isNewDay() {
  const today = new Date().toDateString();
  const lastVisitDate = localStorage.getItem('lastVisitDate');

  if (lastVisitDate !== today) {
    localStorage.setItem('lastVisitDate', today);
    return true;
  }
  return false;
}

export { isNewDay };
