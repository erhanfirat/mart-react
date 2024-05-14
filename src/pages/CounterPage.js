import { useState } from "react";
import { Counter } from "../components/Counter";
import { MyButton } from "../components/MyButton";

export const CounterPage = () => {
  const [show, setShow] = useState(true);

  return (
    <div>
      <h1>Sayaç Sayfası</h1>
      <hr />
      <div>
        <Counter initialCounter={50} unit={5} />
        <Counter initialCounter={100} unit={10} counterId={"c-100"} />
        <br />
        <MyButton onClick={() => setShow(!show)}>Toggle Counter</MyButton>
        {show && <Counter counterId={"c-0"} />}
        <hr />
      </div>
    </div>
  );
};
