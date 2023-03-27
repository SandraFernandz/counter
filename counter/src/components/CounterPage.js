import { useCounter } from '../hooks/useCounter';

export const CounterPage = ({ initialCount }) => {
  const { count, handleIncrement } = useCounter(initialCount);
  return (
    <div>
      <button onClick={handleIncrement}>Increase</button>
      <h3>Count is {count}</h3>
    </div>
  );
};
