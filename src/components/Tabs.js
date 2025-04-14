import React, { useState } from "react";
import ChartPanel from "./ChartPanel";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("Chart");

  const renderContent = () => {
    switch (activeTab) {
      case "Summary":
        return <div>📄 Summary content goes here.</div>;
      
      case "Statistics":
        return <div>📊 Statistics content goes here.</div>;
      case "Analysis":
        return <div>🧠 Analysis content goes here.</div>;
      case "Settings":
        return <div>⚙️ Settings content goes here.</div>;
      default:
        return null;
    }
  };

  const tabs = ["Summary", "Chart", "Statistics", "Analysis", "Settings"];

  return (
    <div className="app-container">
      <div className="tabs">
        {tabs.map((tab) => (
          <div
            key={tab}
            className={`tab ${activeTab === tab ? "active" : ""}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </div>
        ))}
      </div>
      <div className="tab-content">{renderContent()}</div>
    </div>
  );
};

export default Tabs;
