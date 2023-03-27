import { useState, useEffect } from 'react';

export const CounterPage = ({ initialCount }) => {
  const [count, setCount] = useState(initialCount);
  useEffect(() => {
    console.log(count);
  }, [count]);
  return <div>hello</div>;
};
