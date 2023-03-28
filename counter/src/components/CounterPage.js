import { useReducer, useEffect } from 'react';

export const CounterPage = ({ initialCount }) => {
  // const [count, setCount] = useState(initialCount);
  // const [valueToAdd, setValueToAdd] = useState(0);
  const reducer = (state, action) => {
    return {
      ...state,
      count: state.count + 1,
    };
  };
  const [state, dispatch] = useReducer(reducer, {
    count: initialCount,
    valueToAdd: 0,
  });
  useEffect(() => {
    console.log(state.count);
  }, [state.count]);
  const handleIncrement = () => {
    // setCount(count + 1);
  };
  const handleDecrement = () => {
    dispatch();
  };
  const handleChange = (event) => {
    const value = parseInt(event.target.value) || 0;
    // setValueToAdd(value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    // setCount(count + valueToAdd);
    // setValueToAdd(0);
  };
  return (
    <div>
      <button onClick={handleIncrement}>Increase</button>
      <button onClick={handleDecrement}>Decrease</button>
      <h4>Count is {state.count}</h4>
      <form onSubmit={handleSubmit}>
        <label>Add a lot!</label>
        <br />
        <input
          type="number"
          value={state.valueToAdd || ''}
          onChange={handleChange}
        />
        <br />
        <button>Add it!</button>
      </form>
    </div>
  );
};
