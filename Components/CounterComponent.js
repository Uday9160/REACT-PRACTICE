import React, { useState } from "react";

function CounterComponent() {
  const [count, setCount] = useState(0);
  const styleButton = {
    border: "3px solid gray",
    borderRadius: "50%",
    width: "70px",
    height: "70px",
  };

  return (
    <div className="App">
      <h1 style={{ color: "red" }}>{count}</h1>
      <div>
        <button style={styleButton} onClick={() => setCount((c) => c + 1)}>
          +
        </button>
        <button style={styleButton} onClick={() => setCount((c) => c - 1)}>
          -
        </button>
      </div>
    </div>
  );
}

export default CounterComponent;
