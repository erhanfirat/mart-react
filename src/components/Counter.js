import { useEffect, useState } from "react";
import { CounterDisplay } from "./CounterDisplay";

export const Counter = ({ initialCounter = 0, unit = 1 }) => {
  const [counter, setCounter] = useState(initialCounter);

  const arttir = () => setCounter(counter + unit);
  const azalt = () => setCounter(counter - unit);
  const reset = () => setCounter(initialCounter);

  useEffect(() => {
    console.warn("Counter değeri değişti: ", counter);
  }, [counter]);

  useEffect(() => {
    // Component Did Mount anını yakalarız - anında bu fonk çalışır
    // componentin doğum anı

    console.log("Counter componenti did mount oldu, doğdu!");
  }, []);

  return (
    <CounterDisplay
      counter={counter}
      arttir={arttir}
      azalt={azalt}
      reset={reset}
    />
  );
};
