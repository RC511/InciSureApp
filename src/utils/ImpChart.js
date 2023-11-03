import React from "react";
import { Line } from "react-chartjs-2";

function ImpChart({ chartData }) {
  return (
    <div className="chart-container">
      <h2 style={{ textAlign: "center", color: '#01358C', fontSize: '35px' }}>Impedance</h2>
      <Line
        data={chartData}
        options={{
          scales: {
            y: {
              display: true,
              suggestedMin: 1000,
              suggestedMax: 1500,
              ticks: {
                  stepValue: 100
              }
            }
          },
          plugins: {
            title: {
              display: true,
              text: "Wound impedance for previous 24 hours",
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