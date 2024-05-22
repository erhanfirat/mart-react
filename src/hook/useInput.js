import { useLocalStorage } from "./useLocalStorage";

export const useInput = (name, initialVal) => {
  const [val, setVal] = useLocalStorage(name, initialVal);

  const changeHandler = (e) => {
    const { value, type, checked } = e.target;

    setVal(type === "checkbox" ? checked : value);
  };

  return [val, changeHandler];
};
