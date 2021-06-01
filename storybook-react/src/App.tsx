import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { MyCoolButton } from "./components/sample-component/MyCoolButton";

function App() {
  //Some comment to test Sandbox
  return (
    <div className="App">
      <header className="App-header">
        <MyCoolButton type="basic" size="giant" label="My Cool Button" />
      </header>
    </div>
  );
}

export default App;
