import React, { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <h1>My React Project</h1>
        <p>Built with React 19.1.1</p>

        <div className="counter-section">
          <h2>Counter Example</h2>
          <p>Count: {count}</p>
          <button onClick={() => setCount(count + 1)}>
            Increment
          </button>
          <button onClick={() => setCount(count - 1)}>
            Decrement
          </button>
          <button onClick={() => setCount(0)}>
            Reset
          </button>
        </div>

        <div className="info-section">
          <h2>React Features</h2>
          <ul>
            <li>Functional Components</li>
            <li>React Hooks (useState)</li>
            <li>JSX Syntax</li>
            <li>Event Handling</li>
            <li>Component State Management</li>
          </ul>
        </div>
      </header>
    </div>
  )
}

export default App