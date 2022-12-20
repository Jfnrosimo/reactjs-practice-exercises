import { useState } from "react";

//Import css
import "./Counter.css";

const Counter = () => {
  // const [count, setCount] = useState(0);
  const [count, setCount] = useState(0);
  return (
    <div className="counter-wrapper">
      <h1>Simple Counter</h1>
      <h2 className={count < 0 ? "negative" : count > 0 ? "positive" : "zero"}>
        {count}
      </h2>
      <div className="button-wrapper">
        <button onClick={() => setCount(count - 1)}>-</button>
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
    </div>
  );
};

export default Counter;
