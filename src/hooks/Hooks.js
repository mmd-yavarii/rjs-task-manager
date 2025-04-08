import { useEffect, useState } from 'react';

// function for useing localsetorage
function useLocalStorage(key, Value) {
  const [data, setData] = useState(JSON.parse(localStorage.getItem(key)) ?? Value);
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(data));
  }, [data]);

  return [data, setData];
}

export { useLocalStorage };
