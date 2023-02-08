import React, { useState, useRef, useEffect } from "react";
import "./App.css";

function App() {
  const [app, setApp] = useState(0);
  const previousValue = useRef(null);

  function newfunction() {
    setApp((i) => i + 1);
  }

  useEffect(() => {
    previousValue.current = app;
  }, [app]);

  return (
    <div className="App">
   <h3> Current State : {app}</h3>  
      <button onClick={() => newfunction()}>button</button>
    <h3> PreviousState: {previousValue.current}</h3> 
    </div>
  );
}

export default App;
