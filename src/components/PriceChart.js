import React from "react";
import ReactApexChart from "react-apexcharts";

export default function PriceChart({ data }) {
  const series = [
    {
      name: "Price",
      data: data.map((point) => point.value),
    },
  ];

  const options = {
    chart: {
      type: "line",
      toolbar: { show: false },
    },
    stroke: {
      curve: "smooth",
      width: 2,
      colors: ["#5a47f6"],
    },
    tooltip: {
      enabled: true,
      x: {
        formatter: (val, opts) => data[opts.dataPointIndex]?.time || val,
      },
      y: {
        formatter: (val) => `$${val.toFixed(2)}`,
      },
    },
    xaxis: {
      categories: data.map((point) => point.time),
      labels: { rotate: -45, hideOverlappingLabels: true },
    },
    yaxis: {
      labels: {
        formatter: (val) => `$${val.toLocaleString()}`,
      },
    },
    grid: {
      strokeDashArray: 4,
    },
  };

  return (
    <div id="chart">
      <ReactApexChart options={options} series={series} type="line" height={300} />
    </div>
  );
}
