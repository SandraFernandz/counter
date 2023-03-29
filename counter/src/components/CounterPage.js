import { useReducer, useEffect } from 'react';

const INCREMENT_COUNT = 'increment';
const DECREMENT_COUNT = 'decrement';
const SET_VALUE_TO_ADD = 'set_value_to_add';
const SET_VALUE_TO_COUNT = 'add_value_to_count';

export const CounterPage = ({ initialCount }) => {
  // const [count, setCount] = useState(initialCount);
  // const [valueToAdd, setValueToAdd] = useState(0);
  const reducer = (state, action) => {
    switch (action.type) {
      case DECREMENT_COUNT:
        return {
          ...state,
          count: state.count - 1,
        };
      case INCREMENT_COUNT:
        return {
          ...state,
          count: state.count + 1,
        };
      case SET_VALUE_TO_ADD:
        return {
          ...state,
          valueToAdd: action.payload,
        };
      case SET_VALUE_TO_COUNT:
        return {
          ...state,
          count: state.count + state.valueToAdd,
          valueToAdd: 0,
        };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, {
    count: initialCount,
    valueToAdd: 0,
  });
  useEffect(() => {
    console.log(state.count);
  }, [state.count]);
  const handleIncrement = () => {
    dispatch({
      type: INCREMENT_COUNT,
    });
    console.log(state);
  };
  const handleDecrement = () => {
    dispatch({
      type: DECREMENT_COUNT,
    });
    console.log(state);
  };
  const handleChange = (event) => {
    const value = parseInt(event.target.value) || 0;
    dispatch({
      type: SET_VALUE_TO_ADD,
      payload: value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({
      type: SET_VALUE_TO_COUNT,
    });
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
