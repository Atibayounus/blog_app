import { useEffect } from "react";

function Counter({ count, onIncrement }) {
  useEffect(() => {
    console.log("Count changed to:", count);
  }, [count]);

  return (
    <div className="counter">
      <h4>Counter (props + useEffect demo)</h4>
      <p className="count-value">{count}</p>
      <button onClick={onIncrement}>Add 1</button>
      <p className="hint">Open the browser console to see the effect firing.</p>
    </div>
  );
}

export default Counter;