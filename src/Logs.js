import NavBarItem from "./NavBarItem";
import './Logs.css';
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { useEffect, useState } from "react";
import {PiWarningFill} from "react-icons/pi"
import TempChart from "./utils/TempChart";
import ImpChart from "./utils/ImpChart";
import {db} from "./firebase.js";
import { onChildAdded, ref, get, Database, onValue, query, off, limitToLast } from "firebase/database";
import { getUID } from "./TokenHandler";

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
          const length = newData.length;
          setTemperature(newData[length-1].temp + "°C")
          setTempData(newData);
          setImpedance(newData[length-1].imp+ "Ω")

          const updatedChartData1 = {
            labels: newData.map((entry)=> entry.time),
            datasets: [
              {
                label: "Temperature",
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
                label: "Impedance",
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

    const [theme, setTheme] = useState("healthy");
    get(ref(db, "/patients/"+getUID()+"/Warning")).then((snapshot) => {
      if (snapshot.exists()) {
          console.log(snapshot.val())
          if(snapshot.val())
              setTheme("sick");
          else
              setTheme("healthy");
      } else {
          console.error("NO HEALTH DATA");
      }
  }).catch((error) => {
      console.error(error);
  });
    
  const style_warn = { color: "red" };
    return(
        <div className = "topContainer" id= {theme}>
          <div className="back">
              <div class="navBar">
                  {NavBarItem(2)}
              </div>
              <main class="containerLogs">
                  <main class="containerValue">
                      
                      <div class="Plot">
                          <TempChart chartData={chartData1} />
                      </div>
                      <div className="boxValue">
                        <div className = "warning">
                          
                        <span className='inline-flex items-center text-m'>
                          {theme === "sick" && <PiWarningFill size={25} className='mr-2' style = {style_warn} />}
                          {theme === "sick" &&"Current measurement deviates from normal state"}  
                        </span>
                        </div>
                        <div class="Data">
                            {temperature}
                        </div>
                      </div>
                      
                  </main>
                  <main class="containerValue">
                      <div class="Plot">
                          <ImpChart chartData={chartData2} />
                      </div>
                      <div class="Data">
                          {impedance}
                      </div>
                  </main>
              </main>
          </div>
        </div>
    )
};