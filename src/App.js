import { userName } from "./shared";
import { Counter } from "./components/Counter";

import "./App.css";

function App() {
  return (
    <div className="main">
      <h1>Merhaba {userName}</h1>
      <hr />
      <Counter initialCounter={50} unit={5} />
      <Counter initialCounter={100} unit={10} />
      <Counter />
    </div>
  );
}

export default App;
