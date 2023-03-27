import { useState, useEffect } from 'react';

const useCounter = (initialCount) => {
  const [count, setCount] = useState(initialCount);
  useEffect(() => {
    console.log(count);
  }, [count]);
  const handleClick = () => {
    setCount(count + 1);
  };
  return {
    count,
    handleClick,
  };
};

export const CounterPage = ({ initialCount }) => {
  const { count, handleClick } = useCounter(initialCount);
  return (
    <div>
      <button onClick={handleClick}>Increase</button>
      <h3>Count is {count}</h3>
    </div>
  );
};
