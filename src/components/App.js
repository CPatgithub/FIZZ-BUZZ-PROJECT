import React, { useState } from 'react';
import '../styles/App.css';
const App = () => {

  const [count, setCount] = useState(1);
  let className = "normal"
  if(count%3===0){className="fizz"}
  if(count%5===0){className="buzz"}
  if(count%3===0 && count%5===0){className="fizzbuzz"}
  
  return (
    <div id="main">
      <button id ="increment" onClick={()=>{setCount(count+1);}}> increment </button>
      <div id="counter" className={className}>{count}</div>
      <button id="decrement" onClick={()=>{setCount(count-1);}}> decrement </button>
    </div>
  )
}


export default App;
