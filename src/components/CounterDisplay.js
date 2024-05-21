import { useEffect, useState } from "react";
import { MyButton } from "./MyButton";

export const CounterDisplay = ({
  counterId,
  counter,
  arttir,
  azalt,
  reset,
}) => {
  return (
    <div
      id={counterId}
      data-cy={"test-" + counterId}
      className="counter-container"
    >
      <div className="counter">{counter}</div>
      <div>
        <MyButton onClick={arttir} color="primary">
          +
        </MyButton>
        <MyButton onClick={reset} color="danger">
          Reset
        </MyButton>
        <MyButton onClick={azalt} color="primary">
          -
        </MyButton>
      </div>
    </div>
  );
};
