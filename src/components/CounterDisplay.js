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
      className="bg-teal-950 text-slate-200 border rounded-lg inline-block m-4 font-mono shadow-2xl"
    >
      <div className="py-4 px-8 text-center text-xl">{counter}</div>
      <div className="flex p-2 gap-2">
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
