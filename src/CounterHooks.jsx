import { useState, useContext } from "react";
import { ThemeContext } from "./App";

const CounterHooks = ({ initialValue }) => {
  const [count, setCount] = useState(initialValue);
  const style = useContext(ThemeContext);

  return (
    <div>
      <button
        style={style}
        onClick={() => setCount((prevCount) => prevCount - 1)}
      >
        -
      </button>
      <span>{count}</span>
      <button
        style={style}
        onClick={() => setCount((prevCount) => prevCount + 1)}
      >
        +
      </button>
    </div>
  );
};

export default CounterHooks;
