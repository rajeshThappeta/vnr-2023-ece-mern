import "./Test1.css";
import { useState } from "react";

function Test1() {
  //state
  let [counter, setCounter] = useState(1);

  //change state
  function incrementCounter() {
    setCounter(counter + 1);
  }

  function decrementCounter() {
    setCounter(counter - 1);
  }

  return (
    <div className="bg-white my-card text-info p-3 m-2 ">
      <h1>Counter - {counter}</h1>

      <button className="btn btn-warning text-dark" onClick={incrementCounter}>
        Increment
      </button>
      <button className="btn btn-danger ms-2 text-dark" onClick={decrementCounter}>
        Decrement
      </button>
    </div>
  );
}

export default Test1;
