import { useEffect, useState } from 'react';

export const useCounter = (initialCount) => {
  const [count, setCount] = useState(initialCount);
  useEffect(() => {
    console.log(count);
  }, [count]);
  const handleIncrement = () => {
    setCount(count + 1);
  };
  return {
    count,
    handleIncrement,
  };
};
