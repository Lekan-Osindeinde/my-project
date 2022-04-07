import { useState } from "react";

function FunctionalCounter() {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    if (counter >= 50) {
      return;
    }
    setCounter(counter + 1);
  };

  const decrement = () => {
    if (counter === 0) {
      return;
    }
    setCounter(counter - 1);
  };
  return (
    <div>
      <div>
        <h1>Counter value: {counter}</h1>
      </div>
      <div>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </div>
    </div>
  );
}
export default FunctionalCounter;
