import React, { useRef, useState } from "react";

function UseRef() {
  const ref = useRef(0);
  const [count, setCount] = useState(0);
  const b = 7;

  function increment() {
    ref.current++;
    console.log(ref.current);
    setCount(ref.current); 
  }

  return (
    <div>
      <h2>Current count is: {count}</h2>
      <h2>b is: {b}</h2>
      <button onClick={increment}>Click Me</button>
    </div>
  );
}

export default UseRef;