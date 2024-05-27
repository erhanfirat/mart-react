import { useEffect, useState } from "react";
import { Counter } from "../components/Counter";
import { MyButton } from "../components/MyButton";
import { CounterWithReducer } from "../components/CounterWithReducer";

export const CounterPage = () => {
  const [show, setShow] = useState(true);

  return (
    <div>
      <h1>Sayaç Sayfası</h1>
      <hr />
      <div>
        <Counter initialCounter={50} unit={5} counterId="c-50" />
        <Counter initialCounter={100} unit={10} counterId={"c-100"} />
        <br />
        <MyButton onClick={() => setShow(!show)}>Toggle Counter</MyButton>
        {show && <Counter counterId={"c-0"} initialCounter={0} />}
        <hr />
        <h3>Counter with Reducer</h3>
        <CounterWithReducer counterId={"c-r"} initialCounter={0} />
        <hr />
      </div>
    </div>
  );
};
