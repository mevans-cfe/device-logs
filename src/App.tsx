import React from "react";
import { EmployeeTable } from "./components/EmployeeTable";
import "./styles/App.scss";

function App() {
  return (
    <div className="App">
      <h1>Device Logs</h1>
      <EmployeeTable />
    </div>
  );
}

export default App;
