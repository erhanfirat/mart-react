import { useEffect, useState } from "react";

export const useLocalStorage = (key, initialVal) => {
  const [val, setVal] = useState(() => {
    const keyLocal = localStorage.getItem(key);

    if (keyLocal) {
      return JSON.parse(keyLocal);
    }

    return initialVal;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(val));
  }, [val]);

  return [val, setVal];
};
