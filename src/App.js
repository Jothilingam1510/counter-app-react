import React, { useState } from 'react';
function CounterApp() {
  const [count, setCount] = useState(0);

const handleCounter = (action) => {
    if (action === 'increment') {
      setCount(count + 1);
    } else {
      setCount(count > 0 ? count - 1 : 0);
    }
  };

  return (
    <div>
      <div className="container my-5">
      <div className="card text-center my-5">
      <div className="card-body">
      <h1>Counter: {count}</h1>     
      <button className="btn btn-success mx-3" onClick={() => handleCounter('increment')}>Increment</button>
      <button className="btn btn-danger mx-3" onClick={() => handleCounter('decrement')}>Decrement</button>
      </div> 
      </div> 
      </div>  
    </div>
  );
}

export default CounterApp;
