import React, { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)
  
  const incnum = () =>{
    setCount(count +1)
  }
  
  const decnum = () =>{
    if(count >0){
    setCount(count -1);
  }else{
    setCount(0)
  }
  };
  const reset = () =>{
    setCount(0)
  }
  return (
    <div className="container my-5">
      <div className="card text-center my-5">
        <div className="card-body">
          <h1>counter app</h1>
          <div className="my-5">
            <h2 className="my-5">{count}</h2>
            <button className="btn btn-success mx-3"onClick={incnum}>Increament</button>
            <button className="btn btn-danger mx-3" onClick={decnum}>Decreament</button>
            <button className="btn btn-secondary mx-3" onClick={reset}>Reset</button>
          </div>

        </div>
      </div>
    </div>
  )
}

export default App;