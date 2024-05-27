import { useEffect, useReducer, useState } from "react";
import { CounterDisplay } from "./CounterDisplay";

const counterReducer = (state, action) => {
  switch (action.type) {
    case "ARTTIR":
      return state + 1;
      break;

    case "AZALT":
      return state - 1;
      break;

    case "SIFIRLA":
      return 0;
      break;

    default:
      return state;
      break;
  }
};

export const CounterWithReducer = ({
  initialCounter = 0,
  unit = 1,
  counterId = "counter-" + Math.round(Math.random() * 9999999999),
}) => {
  const [counter, dispatchCounter] = useReducer(counterReducer, initialCounter);

  const arttir = () => dispatchCounter({ type: "ARTTIR", payload: undefined });
  const azalt = () => dispatchCounter({ type: "AZALT" });
  const reset = () => dispatchCounter({ type: "SIFIRLA" });

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
