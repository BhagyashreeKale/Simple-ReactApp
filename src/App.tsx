import React, { useState } from 'react';
import Hello from './components/Hello';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Hello React + TypeScript + Vite!</h1>
      <Hello name="Developer" />   {/* 👈 Using new component */}
      <p>Simple Counter Example</p>
      <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default App;
