import { useState, useEffect } from 'react';

export const CounterPage = ({ initialCount }) => {
  const [count, setCount] = useState(initialCount);
  useEffect(() => {
    console.log(count);
  }, [count]);
  const handleIncrement = () => {
    setCount(count + 1);
  };
  const handleDecrement = () => {
    setCount(count - 1);
  };
  return (
    <div>
      <button onClick={handleIncrement}>Increase</button>
      <button onClick={handleDecrement}>Decrease</button>
      <h4>Count is {count}</h4>
      <form>
        <label>Add a lot!</label>
        <br />
        <input type="number" />
      </form>
    </div>
  );
};
