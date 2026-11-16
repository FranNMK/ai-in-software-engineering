import { useState } from 'react'
import './App.css'

// A component is just a function that returns UI (JSX)
function Card({ title, text }) {          // props = inputs
  return (
    <div className="card">
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  )
}

function App() {
  const [count, setCount] = useState(0)   // state = data that changes

  return (
    <main>
      <h1>Learning React</h1>
      <Card title="Hello" text="This is a reusable component." />
      <Card title="Another" text="Same component, different props." />
      <button onClick={() => setCount(count + 1)}>
        Clicked {count} times
      </button>
    </main>
  )
}

export default App