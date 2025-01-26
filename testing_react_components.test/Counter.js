import React, { useState } from 'react';  // Import React and useState hook

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);

  return (
    <div>
      <button onClick={increment}>Increment</button>
      <span>{count}</span>
    </div>
  );
}

export default Counter;
