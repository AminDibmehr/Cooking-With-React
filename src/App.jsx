import Counter from "./Counter";
import CounterHooks from "./CounterHooks";
import { useState, createContext } from "react";

export const ThemeContext = createContext();

const App = () => {
  const [theme, setTheme] = useState("red");
  return (
    <ThemeContext.Provider value={{ backgroundColor: theme }}>
      <Counter initialValue={0} />
      <CounterHooks initialValue={0} />
      <button
        onClick={() =>
          setTheme((prevTheme) => {
            return prevTheme === "red" ? "blue" : "red";
          })
        }
      >
        Toggle Theme
      </button>
    </ThemeContext.Provider>
  );
};

export default App
