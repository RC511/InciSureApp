import React from "react";
import { Line } from "react-chartjs-2";

function LineChart({ chartData }) {
  return (
    <div className="chart-container">
      {/* <h2 style={{ textAlign: "center" }}>Temperature</h2> */}
      <Line
        data={chartData}
        options={{
          plugins: {
            // title: {
            //   display: true,
            //   text: "Wound temperature for previous 24 hours"
            // },
            legend: {
              display: false
            }
          }
        }}
      />
    </div>
  );
}

export default LineChart;