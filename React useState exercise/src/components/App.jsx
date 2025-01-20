import React, { useState } from "react";

function App() {
  const now = new Date().toLocaleTimeString();
  const [time, setTime] = useState(now);

  function getHour() {
    const newTime = new Date().toLocaleTimeString();
    setTime(newTime);
  }

  setInterval(getHour, 1000);

  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={getHour}>Get Time</button>
    </div>
  );
}

export default App;
