import React from "react";
import { Counter } from "./features/counter/Counter";
import TestRedux1V1 from "./components/test-redux1-v1";
import TestRedux1V2 from "./components/test-redux1-v2";
import TestRedux2V1 from "./components/test-redux2-v1";
import TestRedux2V2 from "./components/test-redux2-v2";
import TestRedux2V3 from "./components/test-redux2-v3";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Counter />
      <TestRedux1V1 />
      <TestRedux1V2 />
      <TestRedux2V1 />
      <TestRedux2V2 />
      <TestRedux2V3 />
    </div>
  );
}

export default App;
