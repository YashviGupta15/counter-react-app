import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const removeValue = () => {
    if (count <= 0) {
      setCount((count) => 0)
    } else {
      setCount((count) => count - 1)
    }
  }
  return (
    <>
      <h1>Vite + React Counter App</h1>
      <div>
        count is {count}
        <br/>
        <button onClick={() => setCount((count) => count + 1)}> Add </button>
        <button onClick={removeValue}> Remove </button>
      </div>
    </>
  )
}

export default App
