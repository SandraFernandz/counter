import { useState, useEffect } from 'react';

export const CounterPage = ({ initialCount }) => {
  const [count, setCount] = useState(initialCount);
  useEffect(() => {
    console.log(count);
  }, [count]);
  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <h3>Count is {count}</h3>
      <button onClick={handleClick}>Increase</button>
    </div>
  );
};
