import React, { useEffect, useState, useRef } from "react";
import PriceChart from "./PriceChart";

const durations = [
  { label: "1d", days: 1 },
  { label: "3d", days: 3 },
  { label: "1w", days: 7 },
  { label: "1m", days: 30 },
  { label: "6m", days: 180 },
  { label: "1y", days: 365 },
  { label: "max", days: "max" },
];

export default function ChartPanel() {
  const [active, setActive] = useState("3d");
  const [chartData, setChartData] = useState([]);
  const chartRef = useRef(null);

  const fetchData = async (days) => {
    try {
      const res = await fetch(
        `https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=${days}`
      );
      const data = await res.json();
      const prices = data.prices.map(([timestamp, price]) => ({
        time: new Date(timestamp).toLocaleDateString(),
        value: price,
      }));
      setChartData(prices);
    } catch (err) {
      console.error("Error fetching data:", err);
    }
  };

  useEffect(() => {
    const selected = durations.find((d) => d.label === active);
    fetchData(selected.days);
  }, [active]);

  const toggleFullscreen = () => {
    const elem = chartRef.current;
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) {
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) {
      elem.msRequestFullscreen();
    }
  };

  const handleCompare = () => {
    alert("Compare feature coming soon!");
  };

  return (
    <div className="chart-section" ref={chartRef}>
      <div className="toolbar">
        <button onClick={toggleFullscreen}>Fullscreen</button>
        <button onClick={handleCompare}>Compare</button>
        <div className="durations">
          {durations.map(({ label }) => (
            <button
              key={label}
              className={`duration-btn ${label === active ? "active" : ""}`}
              onClick={() => setActive(label)}
            >
              {label}
            </button>
          ))}
        </div>
      </div>
      <PriceChart data={chartData} />
    </div>
  );
}
