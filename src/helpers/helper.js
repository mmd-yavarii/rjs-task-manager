function isNewDay(storageKey = 'lastVisitDate', currentDate = new Date()) {
  const lastVisit = localStorage.getItem(storageKey);

  if (!lastVisit) {
    localStorage.setItem(storageKey, currentDate.toISOString());
    return false;
  }

  const lastVisitDate = new Date(lastVisit);

  const isNewDay =
    lastVisitDate.getDate() !== currentDate.getDate() ||
    lastVisitDate.getMonth() !== currentDate.getMonth() ||
    lastVisitDate.getFullYear() !== currentDate.getFullYear();

  if (isNewDay) {
    localStorage.setItem(storageKey, currentDate.toISOString());
  }

  return isNewDay;
}

export { isNewDay };
