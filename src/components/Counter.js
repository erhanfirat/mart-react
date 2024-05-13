import { useEffect, useState } from "react";
import { CounterDisplay } from "./CounterDisplay";

export const Counter = ({
  initialCounter = 0,
  unit = 1,
  counterId = "counter-" + Math.round(Math.random() * 9999999999),
}) => {
  const [counter, setCounter] = useState(initialCounter);
  let counter1 = 0;

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
      counterId={counterId}
      counter={counter}
      arttir={arttir}
      azalt={azalt}
      reset={reset}
    />
  );
};
