"use client";
import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  return (
    <div className="text-center">
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button> <br></br>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default Counter;
