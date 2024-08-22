import React from "react";
import "./App.css";
import Counter from "./coponents/Counter";

function App() {
  return (
    <>
      <div
        className="d-flex align-items-center justify-content-center w-100 flex-column"
        style={{ height: '100vh'  }}
      >
        <div
          className="d-flex align-items-center justify-content-center w-75 flex-column p-5 rounded"
          style={{ backgroundColor: "pink" }}
        >
          <h2 className="text-primary">Counter Application</h2>
          <Counter />
        </div>
      </div>
    </>
  );
}

export default App;
