import { useState } from "react";
import { CounterDisplay } from "./CounterDisplay";

export const Counter = ({ initialCounter = 0, unit = 1 }) => {
  const [counter, setCounter] = useState(initialCounter);

  const arttir = () => setCounter(counter + unit);
  const azalt = () => setCounter(counter - unit);
  const reset = () => setCounter(initialCounter);

  return (
    <CounterDisplay
      counter={counter}
      arttir={arttir}
      azalt={azalt}
      reset={reset}
    />
  );
};
