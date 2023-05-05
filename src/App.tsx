import React from "react";
import "./App.css";
import { Todo, Payment, OrderDetails } from "./components";

function App() {
  return (
    <div className="App">
      <h1>App</h1>
      <Todo />
      <Payment amount={10} />
      <OrderDetails />
    </div>
  );
}

export default App;
