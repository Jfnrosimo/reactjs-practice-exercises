import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="text-center border border-slate-500 m-2 p-5">
      <h1 className="text-3xl font-semibold">Counter</h1>
      <h2
        className={`text-7xl mb-4 ${
          count > 0 ? "text-green-500" : count < 0 ? "text-red-500" : null
        }`}
      >
        {count}
      </h2>
      <button
        className="mx-2 px-2 border border-slate-600"
        type="button"
        onClick={() => setCount(count - 1)}
      >
        -
      </button>
      <button
        className="mx-2 px-2 border border-slate-600"
        type="button"
        onClick={() => setCount(count + 1)}
      >
        +
      </button>
    </div>
  );
};

export default Counter;
