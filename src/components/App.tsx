import { useState } from "react";
import styles from "./App.module.scss";

export const App = () => {
  const [count, setCount] = useState<number>(0);
  console.log(styles);
  const increment = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <div>
      <h1>{count}</h1>
      <button className={styles.button} onClick={increment}>
        {" "}
        Increment
      </button>
    </div>
  );
};
