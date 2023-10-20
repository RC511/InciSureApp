import React from "react";
import { Line } from "react-chartjs-2";

function ImpChart({ chartData }) {
  return (
    <div className="chart-container">
      <h2 style={{ textAlign: "center" }}>Impedence</h2>
      <Line
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Wound impedence for previous 24 hours"
            },
            legend: {
              display: false
            }
          }
        }}
      />
    </div>
  );
}

export default ImpChart;