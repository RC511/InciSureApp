import NavBarItem from "./NavBarItem";
import './Logs.css';
// import { Helmet } from 'react-helmet';
// import tempPlot from './assets/tempPlot.png';
// import impPlot from './assets/impPlot.png';
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { useEffect, useState } from "react";
import { tempData } from "./utils/tempData";
import { impData } from "./utils/impData";
// import LineChart from "./utils/LineChart";
import TempChart from "./utils/TempChart";
import ImpChart from "./utils/ImpChart";
import {db} from "./firebase.js";
import { onChildAdded, ref, get, Database, onValue, query, off, limitToLast } from "firebase/database";
// import { limitToLast } from "firebase/firestore";
// import { getAuth } from "firebase/auth";

Chart.register(CategoryScale);


export default function Logs() {
   
    const [tempData, setTempData] = useState([])
    const [temperature, setTemperature] = useState("32.3°C")
    const [impedance, setImpedance] = useState("")
    const [chartData1, setChartData1] = useState({
      labels : [],
      datasets: [
        {
          label: "Users Gained ",
          data: [],
          borderColor: "#B69DF8",
          borderWidth: 2
        },
        {
          label: "Temp Top",
          data: [37.2,37.2,37.2,37.2,37.2],
          borderColor: "red",
          borderWidth: 1,
          borderDash: [10, 5],
          pointRadius: 0
        },
        {
          label: "Temp Bottom",
          data: [36.1,36.1,36.1,36.1,36.1],
          borderColor: "red",
          borderWidth: 1,
          borderDash: [10, 5],
          pointRadius: 0,
          fill: '-1',
          backgroundColor: "rgb(154,190,255,0.2)"
        }

      ]
    });

    const [chartData2, setChartData2] = useState({
      labels: [], 
      datasets: [
        {
          label: "Users Gained ",
          data: [],
          borderColor: "#EFB8C8",
          borderWidth: 2,
        }
      ]
  });

    useEffect(() => {
      const dataRef = query(ref(db, "/patients/uzC7yC9cJQWeqVb0hKf3rJ19KRW2/Data"),limitToLast(5));

      const mapData = (snapshot) => {
        const data = snapshot.val();
        if (data) {
          const newData = Object.values(data);
          setTemperature(newData[4].temp + "°C")
          setTempData(newData);
          setImpedance(newData[4].imp+ "Ω")

          const updatedChartData1 = {
            labels: newData.map((entry)=> entry.time),
            datasets: [
              {
                label: "Users Gained",
                data: newData.map((entry) => entry.temp),
                borderColor: "#B69DF8",
                borderWidth: 2
              },
              {
                label: "Temp Top",
                data: [37.2,37.2,37.2,37.2,37.2],
                borderColor: "red",
                borderWidth: 1,
                borderDash: [10, 5],
                pointRadius: 0
              },
              {
                label: "Temp Bottom",
                data: [36.1,36.1,36.1,36.1,36.1],
                borderColor: "red",
                borderWidth: 1,
                borderDash: [10, 5],
                pointRadius: 0,
                fill: '-1',
                backgroundColor: "rgb(154,190,255,0.2)"
              }
            ]
          };
          setChartData1(updatedChartData1)

          const updatedChartData2 = {
            labels: newData.map((entry)=> entry.time),
            datasets: [
              {
                label: "Users Gained",
                data: newData.map((entry) => entry.imp),
                borderColor: "#B69DF8",
                borderWidth: 2
              },
              {
                label: "Imp Top",
                data: [1300,1300,1300,1300,1300],
                borderColor: "red",
                borderWidth: 1,
                borderDash: [10, 5],
                pointRadius: 0
              },
              {
                label: "Imp Bottom",
                data: [1200,1200,1200,1200,1200],
                borderColor: "red",
                borderWidth: 1,
                borderDash: [10, 5],
                pointRadius: 0,
                fill: '-1',
                backgroundColor: "rgb(154,190,255,0.2)"
              }
            ]
          };
          setChartData2(updatedChartData2)
          
        }
     };

     onValue(dataRef,mapData);
      return () => {
        // Unsubscribe from the listener when the component unmounts
        off(dataRef, 'value', mapData);
          };
    }, [])


    
    
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
                        {temperature}
                    </div>
                </main>
                <main class="containerImp">
                    <div class="Plot">
                        <ImpChart chartData={chartData2} />
                    </div>
                    <div class="Data">
                        {impedance}
                    </div>
                </main>
            </main>
        </div>
    )
};