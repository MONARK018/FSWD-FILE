import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div style={styles.container}>
      <h1>Counter: {count}</h1>
      <div>
        <button onClick={() => setCount(count + 1)} style={styles.button}>
          Increment
        </button>
        <button onClick={() => setCount(count - 1)} style={styles.button}>
          Decrement
        </button>
        <button onClick={() => setCount(0)} style={styles.button}>
          Reset
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    marginTop: "50px",
  },
  button: {
    margin: "10px",
    padding: "10px 20px",
    fontSize: "16px",
    cursor: "pointer",
  },
};

export default Counter;
