import React, { useState } from "react";
import "./App.css";

function App() {
  const [randomNumber, setRandomNumber] = useState(null);

  const generateRandomNumber = () => {
    const min = 1;
    const max = 100;
    const number = Math.floor(Math.random() * (max - min + 1)) + min;
    setRandomNumber(number);
  };

  return (
    <div className="container">
      <h1>Random Number Generator</h1>

      {randomNumber === null ? (
        <p className="placeholder">No number generated yet</p>
      ) : (
        <p className="number">Generated Number: {randomNumber}</p>
      )}

      <button onClick={generateRandomNumber}>
        Generate Random Number
      </button>
    </div>
  );
}

export default App;