import React from "react";
import { Line } from "react-chartjs-2";

function TempChart({ chartData }) {
  return (
    <div className="chart-container">
      <h2 style={{ textAlign: "center", color: '#01358C', fontSize: '35px' }}>Temperature</h2>
      <Line
        data={chartData}
        options={{
          plugins: {
            title: {
                display: true,
                text: "Wound temperature for previous 24 hours",
                color: '#01358C',
                font: {
                    size: 20
                  }
            },
            legend: {
                display: false,
            }
          },
          scales: {
            y: {
              display: true,
              suggestedMin: 35,
              suggestedMax: 38,
              ticks: {
                  stepValue: 0.5
              }
            }
          }
        }}
      />
    </div>
  );
}

export default TempChart;