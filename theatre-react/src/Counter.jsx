import { useState } from 'react'
function Counter() {

const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter+1);
  }

  const decrement = () => {
    setCounter(counter-1);
  }

  return (
    <div>
      <h1>
        Hello, students!
      </h1>
      <div>
        <p className="counter">
          {counter}
        </p>
      </div>
      <div>
        <button className="counterButton" onClick = {increment}>
          +
        </button>
        <button  className="counterButton" onClick = {decrement}>
          -
        </button>
      </div>
    </div>
  )
}

export {Counter}