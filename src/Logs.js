import NavBarItem from "./NavBarItem";
import './Logs.css';
// import { Helmet } from 'react-helmet';
// import tempPlot from './assets/tempPlot.png';
// import impPlot from './assets/impPlot.png';
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { useState } from "react";
import { tempData } from "./utils/tempData";
import { impData } from "./utils/impData";
// import LineChart from "./utils/LineChart";
import TempChart from "./utils/TempChart";
import ImpChart from "./utils/ImpChart";

Chart.register(CategoryScale);

export default function Logs() {
    
    const [chartData1, setChartData1] = useState({
        labels: tempData.map((data) => data.year), 
        datasets: [
          {
            label: "Users Gained ",
            data: tempData.map((data) => data.userGain),
            borderColor: "red",
            borderWidth: 2
          }
        ]
    });
    const [chartData2, setChartData2] = useState({
        labels: impData.map((data) => data.year), 
        datasets: [
          {
            label: "Users Gained ",
            data: impData.map((data) => data.userLost),
            borderColor: "blue",
            borderWidth: 2,
          }
        ]
    });
    
    return(
        <div class="back">
            <div class="navBar">
                {NavBarItem(2)}
            </div>
            <main class="containerLogs">
                <main class="containerTemp">
                    <div class="Plot">
                        <TempChart chartData={chartData1} />
                    </div>
                    <div class="Data">
                        36.5°C
                    </div>
                </main>
                <main class="containerImp">
                    <div class="Plot">
                        <ImpChart chartData={chartData2} />
                    </div>
                    <div class="Data">
                        4MΩ
                    </div>
                </main>
            </main>
        </div>
    )
};