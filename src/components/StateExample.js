import React, { useEffect, useState } from "react";

const StateExample = () => {
  const [count, setCount] = useState(0);
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    if (count === 0) {
      return;
    }
    setCount(count - 1);
  };
  useEffect(() => {
    setCounter(counter + 1);
  }, []);

  return (
    <div>
      {count}
      <div>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement} disabled={count <= 0}>
          Decrement
        </button>
      </div>
      <div>{counter}</div>
    </div>
  );
};

export default StateExample;
