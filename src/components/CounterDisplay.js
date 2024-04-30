export const CounterDisplay = ({ counter, arttir, azalt, reset }) => {
  return (
    <div className="counter-container">
      <div className="counter">{counter}</div>
      <div>
        <button onClick={arttir}>+</button>
        <button onClick={reset}>Reset</button>
        <button onClick={azalt}>-</button>
      </div>
    </div>
  );
};
