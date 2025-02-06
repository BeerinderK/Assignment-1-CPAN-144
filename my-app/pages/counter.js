import { useState } from 'react';
import Navbar from '../components/Navbar';

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Navbar />
      <h1>Counter</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
}
