import React, { useState } from 'react';

const handleCounter = (isIncrement) => {
    if (isIncrement) {
      setCount(count + 1);
    } else {
      setCount(count > 0 ? count - 1 : 0);
    }
  };

  return (
    <div>
      <h1>Counter App</h1>
      <p>Count: {count}</p>
      <button onClick={incrementCount}>Increment</button>
      <button onClick={decrementCount}>Decrement</button>
    </div>
  );


export default CounterApp;
