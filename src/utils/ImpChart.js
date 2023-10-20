import React from "react";
import { Line } from "react-chartjs-2";

function ImpChart({ chartData }) {
  return (
    <div className="chart-container">
      <h2 style={{ textAlign: "center", color: '#01358C', fontSize: '35px' }}>Impedence</h2>
      <Line
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Wound impedence for previous 24 hours",
              color: '#01358C',
              font: {
                size: 20
              }
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