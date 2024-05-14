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
    // Effectin başlangıç anını yakalar
    console.warn("COUNTER STATE DEĞİŞTİ: ", counter);

    return () => {
      // Effect in sonlanma anını yakalar
      console.warn("COUNTER STATE DEĞİŞECEK! ", counter);
    };
  }, [counter]);

  useEffect(() => {
    // Component Did Mount anını yakalarız - anında bu fonk çalışır
    // componentin doğum anı

    console.warn("**** Counter componenti did mount oldu, doğdu!");

    return () => {
      // hangi aşamayı yakalar?
      // component will unmount!
      console.warn("**** Counter componenti UNMOUNT oldu, yok edildi!");
    };
  }, []);

  useEffect(() => {
    console.log(
      "Counter componenti rerender edildi, update oldu! Component Did Update"
    );
  });

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
