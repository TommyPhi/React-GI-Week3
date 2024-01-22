import React, {useState} from 'react'
import './App.css';

function App() {
  const [counter, setCounter] = useState(0)

  const handleDecrement = () => {
    setCounter(counter - 1)
  }

  const handleIncrement = () => {
    setCounter(counter + 1)
  }

  return (
    <div className="App">
      <p onClick={handleDecrement}>-</p>
      <h3>{counter}</h3>
      <p onClick={handleIncrement}>+</p>
    </div>
  );
}

export default App;
