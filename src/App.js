import React from "react";
import Header from "./components/Header";
import Tabs from "./components/Tabs";
import ChartPanel from "./components/ChartPanel";
import "./styles.css";

function App() {
  return (
    <div className="app-container">
      <Header />
      <Tabs />
      <ChartPanel />
    </div>
  );
}

export default App;
