import React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from 'features/counter/counterSlice';
import { setToken } from 'features/users/userSlice';

export default function Home() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);
  const token = useSelector((state) => state.user.token);

  useEffect(() => {
    document.title = "React training";
  });

  return (
    <div>
      <button
        aria-label="Increment value"
        onClick={() => dispatch(increment())}
      >
        Increment
      </button>
      <span>{count}</span>
      <button
        aria-label="Decrement value"
        onClick={() => dispatch(decrement())}
      >
        Decrement
      </button>
      <h2>Token: {token}</h2>
      <button aria-label="Set Token" onClick={() => dispatch(setToken())}>Decrement
      </button>
    </div>
  );
}
